// Problem: https://www.hackerrank.com/challenges/find-the-median

int findMedian(vector<int> arr) {

    sort(arr.begin(), arr.end());
    
    int median_index = arr.size()/2;

    return arr[median_index];
}