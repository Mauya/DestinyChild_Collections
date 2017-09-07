app.controller('MusicController', ['$scope', function($scope){
	$scope.albums = [
	{
		id: 1,
		img: "imgs/albums/aimg1.jpg",
		name: "Destiny's Child",
		Year: 1998,
		buy: "https://www.amazon.co.uk/Destinys-Child/e/B000APZPE6"
	},
	{
		id:2,
		img: "imgs/albums/aimg2.jpg",
		name: "writing on the wall",
		year: 1999,
		buy: "https://www.amazon.co.uk/Destinys-Child/e/B000APZPE6"
	},
	{
		id: 3,
		img: "imgs/albums/aimg3.jpg"
		name: "Survivor",
		year: 2001,
		buy: "https://itunes.apple.com/gb/album/survivor/id217363241"
	},
	{
		id: 4,
		img: "imgs/albums/aimg4.jpg",
		name: "8 days of Christmas",
		year: 2001,
		buy: "https://itunes.apple.com/us/album/8-days-of-christmas/id192877331"

	},
	{
		id: 5,
		img: "imgs/albums/aimg5.jpg",
		name: "Destiny Fulfilled",
		year: 2004,
		buy: "https://itunes.apple.com/us/album/destiny-fulfilled/id207341054"
	},
	{
		id: 6,
		img: "imgs/albums/aimg6.jpg",
		name: "The very best of Destiny's Child",
		year: 2012,
		buy: "https://itunes.apple.com/gb/album/playlist-the-very-best-of-destinys-child/id565647887"
	}
	];
}]);