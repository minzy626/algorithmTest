import java.lang.*;
class Solution {
  public String[] solution(int n, int[] arr1, int[] arr2) {
      String[] answer = new String [n];
      int a=0;
      
      
      for(int i=0;i<n;i++){
          a=(arr1[i]|arr2[i]);
          int target =1;
          String result="";
          for(int j=0;j<n;j++){
              result=((a&target)>0?"#":" ")+result;
              target=target<<1;
          }
          answer[i]=result;
         
      }
      
      return answer;
  }
}
