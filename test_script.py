f = open('Membership.csv', 'r')
data = f.readlines()[1:]
players = []
rating_total = 0;

for player in data:
	split_player = player.split(',')
	split_player[3] = int(split_player[3])
	#if split_player[3] > 0:
	#	rating_total = rating_total + split_player[3]

	players.append(split_player)
