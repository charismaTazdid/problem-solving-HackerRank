// https://www.hackerrank.com/challenges/hackerrank-in-a-string

string hackerrankInString(string s) {
    string target ="hackerrank";
    int currentIndex = 0;    
    for(int i = 0; i < s.size(); i++){
        if(s[i] == target[currentIndex]){
            currentIndex++;
            if(currentIndex == target.size()) return "YES";
        }
    }
    return "NO";
}