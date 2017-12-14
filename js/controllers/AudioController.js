angular.module('RouteControllers', [])
app.controller('audioController', function($scope, $filter){
	  var audio=$('#audio-player')[0];
	  var audiolist;
	  var len;
	  var current=0;

	  audiolist= [
	  {id: '1', name: 'Brown Eyes', singer: 'Destiny Child', path: 'http://hiperload.com/s/kf4q59s8c.mp3', length: '3:43'},
	  {id: '2', name: 'Say My Name', singer: 'Destiny Child', path: 'http://hiperload.com/s/cn1d32n5u/d.mp3', length: '3:59'},
	  {id: '3', name: 'Survivor', singer: 'Destiny Child', path: 'http://hiperload.com/s/dn7g08d8o/d.mp3', length: '4:08'},
	  {id: '4', name: 'Lose My Breath', singer: 'Destiny Child', path: 'http://hiperload.com/s/yk0c61p5r/d.mp3', length: '3:38'},
	  ]

	  len = audiolist.length - 1;

	  // audio.volume = 0.10;
	  run(audiolist[0], audio);

	  audio.addEventListener('ended', function(e){
	    next();
	    run(audiolist[current], audio);
	  });
	  
	  $('#btnNext').on('click', function(){
	    next();
	    run(audiolist[current], audio);
	    
	    return false;
	  });
	  
	  $('#btnPrev').on('click', function(){
	    prev();
	    run(audiolist[current], audio);
	    
	    return false;
	  });
	  
	  $('.audio.play').on('click', function(){
	    var music_id = $(this).attr('data-music-id');
	    
	    if(music_id != undefined){
	      playById(music_id);
	    }
	    
	    return false;
	  });
	    
	  function run(music, player) {
	    $('.audio.name').text(music.name);
	    player.src = music.path;
	    
	    audio.load();
	    audio.play();
	  }
	  
	  function next(){
	    current++;
	    if(current > len) current = 0;
	  }
	  
	  function prev(){
	    current--;
	    if(current < 0) current = 0;
	  }
	  
	  function playById(id){
	    var audiolist_id = undefined;
	    
	    $.each(audiolist, function(index, value){
	      if(value.id == id){
	        audiolist_id = index;
	      }
	    });
	    
	    if(audiolist_id != undefined){
	      current = audiolist_id;
	      run(audiolist[current], audio);
	    }
	};
});