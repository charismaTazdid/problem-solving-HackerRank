// Problem: https://www.hackerrank.com/challenges/insertion-sort/

void insertionSort1(int n, vector<int> arr) {
    int i = n - 1;
    int temp = arr[n-1];
    while (i > 0 && arr[i] >=  temp && arr[i-1] >= temp) { 
        arr[i] = arr[i - 1];
        for (int j = 0; j < arr.size(); j++) {
            cout << arr[j] << " ";
        }
        cout << endl;
        --i;
    }
    arr[i] = temp;
    for (int j = 0; j < n; j++) {
            cout << arr[j] << " ";
        }
}