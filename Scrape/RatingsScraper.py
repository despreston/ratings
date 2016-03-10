import urlparse
import re
import datetime
import fileinput
from scrapy.http import Request
from scrapy import Spider

class CheckRatings(Spider):
    name = 'CheckRatings'

    allowed_domains = ['teamusa.org']
    start_urls = ['http://www.teamusa.org/usa-table-tennis/Ratings/USATT-Ratings-Page/']

    def parse(self, response):
        base_url = 'http://www.teamusa.org/~/media/USA_Table_Tennis/Ratings/'
        last_link = ''
        for a in response.xpath('//a[@href]/@href'):
            link = a.extract()
            if link.endswith('.csv?la=en'):
                print('FOUND RATING FILE')
                link = urlparse.urljoin(base_url, link)
                last_link = link
        if self.get_csv_date(last_link):
            date = self.get_csv_date(last_link)
            print 'DOWNLOADING %s' % date
            self.update_index(date)
            yield Request(last_link, callback=self.save_csv)

    def get_csv_date(self, url):
        rule = re.compile('(Ratings-)(.*?)\.')
        match = rule.search(url)
        print(match.group(2))
        if match:
            date_string = match.group(2).encode()
            return datetime.date(int(str(20) + date_string[4:6]), int(date_string[0:2]), int(date_string[2:4].lstrip('0')))
        return None

    def save_csv(self, response):
        with open('../Membership.csv', 'wb') as f:
            f.write(response.body)

    def update_index(self, new_date):
        index = '../ratings_static/index.html'
        f = open(index, 'rb')
        content = re.sub('Updated (.*?)<', 'Updated ' + str(new_date) + '<', f.read())
        f.close()
        with open(index, 'wb+') as f:
            f.write(content)

