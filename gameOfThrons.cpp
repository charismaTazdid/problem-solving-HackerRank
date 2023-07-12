// Problem: https://www.hackerrank.com/challenges/game-of-thrones/


string gameOfThrones(string s) {
    map<char, int> mp;
    for(int i = 0; i < s.size(); i++){
        if(mp[s[i]] == 1)  mp.erase(s[i]);
        else mp[s[i]]++;
    }
    if(mp.size() > 1) return "NO";
    return "YES";
}