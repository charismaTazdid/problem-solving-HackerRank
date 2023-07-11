// Problem: https://www.hackerrank.com/challenges/anagram/

int anagram(string s) {
    if(s.size() % 2 == 1) return -1;
    map<char, int> mp;
    int ans = 0;
    for(int i = 0; i < s.size() / 2; i++) mp[s[i]]++;
    for(int i = s.size() / 2; i < s.size(); i++){
        if(mp[s[i]] != 0) mp[s[i]]--;
        else ans++;
    }
    return ans;
}