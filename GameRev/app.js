var ask = ["1. Apa urutan ke lima dari Alphabet?", "a.B", "b.D", "c.A", "d.F",
				   "2. Manusia tinggal di?", "a.Bumi", "b.Rumah", "c.Atas tanah", "d.Tidak tau",
 				   "3. Harga beras 1 kilogram = Rp.13.000, gula 1 kilogram = Rp.8000, jika Irsyad pergi ke warung apa barang yang akan di beli?","a.Sendok", "b.Rokok","c.Minuman", "d.Tanya dulu"
				];
		var kunci = ["c.A", "b.Rumah", "d.Tanya dulu"];
		var temp = "";

		document.getElementById("ques").innerHTML = ask.shift();
		temp = ask.shift();
		
		document.getElementById("aa").innerHTML = temp;
		document.getElementById("a").value = temp;
		temp = ask.shift();
		
		document.getElementById("bb").innerHTML = temp;
		document.getElementById("b").value = temp;
		temp = ask.shift();
		
		document.getElementById("cc").innerHTML = temp;
		document.getElementById("c").value = temp;
		temp = ask.shift();
		
		document.getElementById("dd").innerHTML = temp;
		document.getElementById("d").value = temp;
		
		var jawabannya = "";
		var nyawa = 3;

		document.getElementById("nyawa").innerHTML = "Nyawa: " + nyawa;
		/*function answer(jawaban) {
			jawabannya = jawaban;
		}*/

		function jawab(jawaban) {
			jawabannya = jawaban;
			var x = kunci.shift();
			if (x == jawabannya) {
				ubahsoal();	
			} 
			else {
						if (nyawa == 3)
						{
							document.getElementById("gmbrlv").src ="lovebroke.png";
							nyawa-=1;
							//document.getElementsByClassName("btn btn1").disabled = true;
						}
					
					else if (nyawa == 2) 
					{
						document.getElementById("gmbrlv2").src ="lovebroke.png";
						nyawa-=1;
					}
					else if (nyawa == 1) 
					{
						document.getElementById("gmbrlv3").src ="lovebroke.png";
						document.getElementById("btn").disabled = true;
						return 0;
					}
				
				//document.getElementById("nyawa").innerHTML = "Nyawa: " + nyawa;
				ubahsoal();
				
			}
		}

		function ubahsoal() {
			document.getElementById("ques").innerHTML = ask.shift();
			temp = ask.shift();
		
		document.getElementById("aa").innerHTML = temp;
		document.getElementById("a").value = temp;
		temp = ask.shift();
		
		document.getElementById("bb").innerHTML = temp;
		document.getElementById("b").value = temp;
		temp = ask.shift();
		
		document.getElementById("cc").innerHTML = temp;
		document.getElementById("c").value = temp;
		temp = ask.shift();
		
		document.getElementById("dd").innerHTML = temp;
		document.getElementById("d").value = temp;
		}
		