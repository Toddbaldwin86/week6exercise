// var testOne = "What kind of variable am I?";
//
//           var testTwo = 256;
//           // number
// 					var testThree = false;
//           // boolean
// 					var testFour = 'true';
//           // string
// 					var testFive = '128';
//           // sting
// 					var testSix = "";
//           // sting
//
//           var testOne = "hello" + "there";
//           // string
// 					var testTwo = "100" + 28;
//           // string
//         	var testThree = true + 3;
//           // number
// 					var testFour = 'false' + 5;
//           // number
// 					var testFive = '128' - 3;
//           // number
// 					var testSix = "" * 9;
//           // number

          // var string1 = "Hello, ";
					// var string2 = "my name is ";
					// var string3 = "Kingsley Pappagiorgio";
					// var combinedStrings = string1 + string2 + string3;
          //
          // console.log (combinedStrings);
          // // = hello, my name is Kingsley Pappagiorgio

          // var num1 = 8;
					// var num2 = 52;
					// var num3 = 60;
					// var combinedNumbers = num1 + num2 + num3;
          // // 120
          // console.log(combinedNumbers);


          // var mixedNum1 = 10;
					// var mixedString1 = "ten";
					// var mixedNum2 = "10";
					// var mixedConcatenation = mixedNum1 + mixedNum2 + mixedString1;
          //
          // // 1010ten
          //
          // console.log(mixedConcatenation);


    //       var num4 = 5;
    // 			var num5 = 0;
    //   //     if(num4 > 1) {
		// 	// 		console.log("Num4 is greater than 1");
		// 	// } else {
		// 	// 	console.log("Num4 is NOT greater than 1");
		// 	// };
    // //
    // //   if(num4 < num5 || num4 === num5) {
    // //   console.log("If statement ran!");
    // // } else if (num5 === "0" || true) {
    // //   console.log("Else if statement ran");
    // // } else {
    // //   console.log("Else statement ran");
    // // };
    //       if(num4 > num5 && num4 === num5) {
    // 				console.log("If statement ran!");
    // 			} else if (num5 === "0" || true) {
    // 				console.log("Else if statement ran");
    // 			} else {
    // 				console.log("Else statement ran");};
// var array1 = ["this", "is", "an", "array", "of", "strings"];
//
// for(var i = 0; i < array1.length; i = i + 1) {
// 				console.log(i, array1[i]);
// 			};


// var array2 = [1, 3, 5, 7, 9];
//   var total = 0;
//   for(var i = 0; i < array2.length; i++) {
// 				total = total + array2[i];
// 			};
// 			console.log(total);

      // var array3 = [11, 33, 55, 77, 99];
      //
      // for(var i = 0; i < array3.length; i++) {
			// 	if(array3[i] >= 55 || array3[i] <= 100) {
			// 		console.log(array3, array3[i]);
			// 	};
			// };

      // function testStuff(a, b) {
    	// 			if(a > 25 && b < 100) {
    	// 				console.log(a + " is greater than 25 and " + b + " is less than 100");
    	// 			} else {
    	// 				console.log(a + " is NOT greater than 25 or " + b + " is NOT less than 100");
    	// 			};
    	// 		};
      //
      //     testStuff(10, 101);
  		// 		testStuff(26, 99);
  		// 		testStuff(100, 25);


      function testStuff2(c, d) {
    				if(c == 25) {
    					console.log(c + " is equal to 25");
    				} else if (d <= 100) {
    					console.log(d + " is less than or equal to 100");
    				} else {
    					console.log("Neither if nor else if statement ran");
    				};
    			};

          testStuff2(26, 101);
          // neither...
  				testStuff2(25, 99);
          // 25 is equal to 25
  				testStuff2(102, 24);
          // 24 is less than or = 100
