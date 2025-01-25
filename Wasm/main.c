#include <stdio.h>

int fact(int n) {
    if(n<0) {
      printf("negative number!\n");
	return 0;
    }
    if(n == 0 || n == 1) {
	return n;
    }

    int ret = 1;
    for(int i=2; i<=n; i++) {
	ret*=i;
    }
    return ret;

}


int main() {

   printf("Welcome to Wasm!\n");
   printf("factorrial(5) = %d \n", fact(5));
   return 0;
}


	
