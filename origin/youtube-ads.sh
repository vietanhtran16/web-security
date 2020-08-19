#!/usr/bin/env bash

# Cleanup previous list of domains files
rm -f ./sublist-youtube-result.txt

# Retrieve all .googlevideo.com subdomains
python /home/pi/sublist/Sublist3r-master/sublist3r.py -d googlevideo.com -n -o ./sublist-youtube-result.txt

# Any .googlevideo.com subdomains starting with 'r' would be filtered in a file
grep ^r ./sublist-youtube-result.txt >> ./sublist-youtube-filtered.txt

# Any .googlevideo.com subdomains containing 's' from the previous filtered list will be filtered in a file
sed 's/\s.*$//' ./sublist-youtube-filtered.txt >> ./sublist-youtube-ads.txt

# Place findings in Pihole blacklist text file
cat ./sublist-youtube-ads.txt > /home/pi/pihole/etc-pihole/blacklist.txt

# Get unique values
perl -i -ne 'print if ! $x{$_}++' /home/pi/pihole/etc-pihole/blacklist.txt

# Get unique values
# chown -R pihole. /home/pi/pihole/etc-pihole

# Pipe findings into pihole db
cat /home/pi/pihole/etc-pihole/blacklist.txt | xargs docker exec pihole pihole -b
