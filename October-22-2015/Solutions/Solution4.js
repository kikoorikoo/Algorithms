function move(n, a, b, c) {
  if (n > 0) {
    move(n-1, a, c, b);
    console.log("Move disk from " + a + " to " + c);
    move(n-1, b, a, c);
  }
}
move(4, "A", "B", "C");


//Alternative Towers of Hanoi solution - 3 rods, n discs

function towers(discs){
	return (Math.pow(2, discs) -1);
}
