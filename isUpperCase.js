function isFirstLetterUpperCase(str) {
       regexp = /^[A-Z]/;
    if(regexp.test(str)){
        return "String's first character is uppercase";
    }else {
        return "String's first charater is not uppercase";
    }
}