app.controller('MusicController', function($scope){
	$scope:albumTitle="DC Greatest Albums";
	$scope.albums = [
	{
		id: 0,
		img: "imgs/albums/aimg1.jpg",
		name: "Destiny's Child",
		Year: 1998,
		link: "https://www.amazon.com/Survivor-Destinys-Child/dp/B00005B5ZU"
	},
	{
		id:1,
		img: "imgs/albums/aimg2.jpg",
		name: "writing on the wall",
		year: 1999,
		link: "https://www.amazon.com/Survivor-Destinys-Child/dp/B00005B5ZU"
	},
	{
		id: 2,
		img: "imgs/albums/aimg3.jpg",
		name: "Survivor",
		year: 2001,
		link: "https://www.amazon.com/Survivor-Destinys-Child/dp/B00005B5ZU"		
	},
	{
		id: 3,
		img: "imgs/albums/aimg4.jpg",
		name: "8 days of Christmas",
		year: 2001,
		link: "https://www.amazon.com/Survivor-Destinys-Child/dp/B00005B5ZU"		
	},
	{
		id: 4,
		img: "imgs/albums/aimg5.jpg",
		name: "Destiny Fulfilled",
		year: 2004,
		link: "https://www.amazon.com/Survivor-Destinys-Child/dp/B00005B5ZU"	
	},
  ];
});