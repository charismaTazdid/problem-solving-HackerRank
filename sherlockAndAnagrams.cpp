// Problem: https://www.hackerrank.com/challenges/sherlock-and-anagrams


int sherlockAndAnagrams(string s) {
    int count = 0;
    unordered_map<string, int>m;
    
    for(int i=0; i<s.size(); i++){
        for(int j=0; j<s.size()-i; j++){
            string str = s.substr(i, j+1);
            
             sort(str.begin(), str.end());
             m[str]++;
        }
    }
    for(auto it= m.begin(); it!=m.end(); it++){
        count += (it->second*(it->second-1))/2;  //nc2
    }
    return count;
}

