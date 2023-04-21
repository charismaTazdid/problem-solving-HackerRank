// Problem: https://www.hackerrank.com/challenges/angry-professor/problem?isFullScreen=true

string angryProfessor(int k, vector<int> a) 
{
    int present = 0;
    
    for(int i : a)
    {
        if(i <= 0)
            present++;
        if(present == k)
            return "NO";
    }   
    return "YES";
}

// DONE
