var goodDrivingRecord = true;
var age = 24;

if (goodDrivingRecord && age > 25) {
    console.log("The driver should get a discount!")
} else if (goodDrivingRecord || age > 25) {
    console.log("The driver should pay the full price.")
} else {
    console.log("The driver will need to have someone else sign for the rental.");
}