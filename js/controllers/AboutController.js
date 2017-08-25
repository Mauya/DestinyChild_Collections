angular.module('RouteControllers', [])
app.controller('AboutController', ['$scope', function($scope) {
    $scope.tabContent = [
    	{
    		name: 'Kelly Rowland',
    		photo: 'imgs/about/bioK1.jpg',
    		bio: "Kelly Rowland rose to fame with the success of Destiny's Child during the late '90s. During that time, Destiny's Child catapulted into the new millennium as one of the best-selling female musical groups in history. Rowland, who was barely in her twenties, had been imagining such stardom for a long time. Born and raised in Atlanta, Gerogia, Rowland began singing as soon as she heard Whitney Houston. She was only four at the time, but Houston's 1985 self-titled debut was enough to motivate the little girl. Performances with the church choir followed, but Rowland's developing interest in music blossomed when she and her family moved to Houston, Texas. She befriended another inspiring singer, Beyoncé Knowles, and the two became fast friends. In the mid-'90s, the two girls formed Destiny's Child. Destiny's Child made an impressive debut in 1997 with first single 'No No No'; their self-titled full-length followed the next winter and went platinum before the year's end. Two more albums followed -- The Writing's on the Wall (1999) and Survivor (2001) -- earning the group countless fans across the globe as well as millions of records sold."
    	},
    	{
    		name: 'Beyonce Knowles',
    		photo: 'imgs/about/bioK2.jpg',
    		bio: "Born on September 4, 1981, in Houston, Texas, Beyoncé Knowles first captured the public's eye as lead vocalist of the R&B group Destiny's Child. She later established a solo career with her debut album Dangerously in Love, becoming one of music's top-selling artists with sold-out tours and a slew of awards. Knowles has also starred in several films, including Dream Girls. She married hip-hop recording artist Jay-Z in 2008. In late 2013, she surprised audiences by releasing her fifth studio album, self-titled Beyoncé, and has twice performed at the Super Bowl. In April 2016, she released her sixth studio album, Lemonade, after the airing of an HBO special."
    	},
    	{
    		name: 'Michelle Williams',
    		photo: 'imgs/about/bioK3.jpg',
    		bio: "Born in 1980, Michelle Williams started singing as a child. She performed gospel music for much of her early life. In 1999, Williams became a backup singer for R&B artist Monica. She then joined Destiny's Child the following year. With Destiny's Child, Williams made such hits as 'Survivor' and 'Bootylicious.' The group broke up in 2005, but they have reunited several times since. Williams has released several solo albums as well, including 2008's Unexpected. She performed at the Super Bowl with Destiny's Child in 2013."
    	}
    	];
}]);