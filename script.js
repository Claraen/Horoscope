//finish populating these arrays with your conten
//add the correct images to the "img" folder
var data = {
 signs : ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "BAD DATE"],
 messages : ["As an Aquarius, you can get so lost in your mental world that you can disassociate from your body! Today’s skies remind you to ground back down and nurture from within as the moon’s presence in your sign helps you pamper yourself. Luna’s link with messenger Mercury makes it easy to express yourself to larger audiences, while her square with Uranus may highlight changes to be made around the home.","Slink off into a world of your own today, Pisces. You’re in desperate need of a quiet and restful recharge where other people can’t drain your energy as the moon meanders through solitude-seeking Aquarius. Luna’s supportive connection with expressive Mercury makes it an ideal day for therapeutic endeavors and vulnerable conversations among those closest to you, while her square with electric Uranus may prompt unexpected insights.", "Today’s skies prioritize friendship and community over all else, Aries. The moon glides through socially-savvy Aquarius, forming a smooth alignment with expressive Mercury on her path. It’s an ideal day for writing projects, doing group-based work, or engaging in important conversations in romantic or platonic relationships. Later, Luna’s electric square with rebellious Uranus can bring unexpected opportunities to activate your talents.", "Reach for the stars today, Taurus. You’re primed to make productive career moves that push you forward towards your goals as the moon meanders through solution-seeking Aquarius. Luna’s sweet connection with mental Mercury makes it an ideal day for connecting with coworkers, sending out job applications, or devoting mental energy to work projects. Meanwhile, the moon’s squabble with electric Uranus can prompt a strong need for individualistic action.", "Gemini people require fresh knowledge to keep their curious minds content. Friday’s skies encourage you to embrace educational efforts and seek adventure as the moon cruises through problem-solving Aquarius. Luna’s sweet connection with your ruler, messenger Mercury, makes it easy to strike an equilibrium between head and heart and apply yourself creatively. Meanwhile, the moon’s disagreement with Uranus may summon out of the blue epiphanies.", "As a Cancer, you need regular soothing and sweet-talking. Let yourself seek out that closeness through a lover or close confidante today as the solution-seeking Aquarius moon smoothly aligns with expression-hungry Mercury. It’s an ideal day for therapy, tarot, or journaling—all of which help your messier feelings get some air. Elsewhere, Luna’s tiff with innovative Uranus initiates changes to long-term goals or friend groups.", "You can’t help but contemplate your close partnerships today, Leo. The moon’s presence in your opposite sign of logic-first Aquarius intensifies your need for intimacy, connection, and to feel heard in your one-on-one’s. Fortunately, the moon’s amicable meet-up with communicator Mercury makes it easy for intimate conversations to run smoothly. Meanwhile, Luna’s square with disruptive Uranus illuminates career changes to be made.", "Things run smoothly beneath Today’s skies, Virgo. Embrace the easy-going flow as the solution-seeking Aquarius moon directs your attention towards incomplete chores and errands. Luna’s smooth connection with your ruler, expressive Mercury, makes it an ideal day to chip away at work projects as this aspect makes it easy to feel balance between head and heart. Later, Luna's square with change-demanding Uranus brings fresh insights to your big picture vision.", "Pleasure and good times reign supreme under Today’s skies, Libra. Save any drudgery and labor for another time as the playful Aquarius moon encourages you to indulge in your romantic sensibilities and immerse yourself in creative activities. Luna’s supportive link with messenger Mercury makes it an ideal day to get on stage and share your story. At the same time, her square with Uranus can bring surprising conversations to the intimacy front.", "Tuck yourself away from the harsh realities of the world today, Scorpio. You’re in the mood to cozy up in the comfort of your home and keep things low-key as the moon wades through thought-provoking Aquarius. The moon’s smooth link with Mercury makes it an ideal day for soulful conversations and therapeutic endeavors, while her square with erratic Uranus later in the day can prompt minor changes on the partnership front.", "As a Sagittarius, you’re a captivating and entertaining storyteller to all of those lucky enough to bask in your light. Let yourself activate that natural skill today as the socially-savvy Aquarius moon aligns with communicator Mercury. It’s an ideal day to devote energy towards writing projects, important conversations, or anything requiring mental stamina. Meanwhile, Luna’s squabble with Uranus highlights changes to be embraced on the job front.", "You’re in the mood to get productive today, Capricorn. Take advantage of your inspired desire to activate your skills, hustle, and push ahead. The moon’s presence in solution-seeking Aquarius acts as the driving force to get things done, and her sweet union with quick-thinking Mercury makes it easy to stay mentally agile. Elsewhere, Luna’s square with erratic Uranus can stimulate changes to creative plans or romantic interests.", "SHAME"],
 images : ["img/aquarius.jpg","img/pisces.png","img/aries.jpg","img/taurus.jpg", "img/gemini.jpeg","img/cancer.jpg","img/leo.jpg","img/virgo.jpg","img/libra.jpg","img/scorpio.png","img/sagittarius.jpg","img/capricorn.jpg", "img/WRONG.jpg"]
}

//this gets called when the user clicks "Go!"
function onSubmit(){
  
  //gets name from the page.  Now get the other two fields. 
  var name = document.getElementById("name").value;
  var month = document.getElementById("month").value;
  var day = document.getElementById("day").value;

  //pass day and month to determineSign and save the result as "sign"
  var sign = determineSign(day,month);

  //display the correct output based on sign
  document.getElementById("sign").innerHTML = "Hey, " + name + ". You are a " + data.signs[sign] + "!";
  document.getElementById("message").innerHTML = data.messages[sign];
  document.getElementById("image").src = data.images[sign];
  console.log(data.images[sign])
}

//given day and month numbers, return a number that 
//corresponds to a sign.  Like: 0 Aquarius, 1 Pisces etc
function determineSign(day,month){
  //bad date!
  if(month == 1 && day >= 20 && day<= 31 || month == 2 && day <= 18) {
    return 0;
  }

  if(month == 2 && day >= 19 && day <= 29 || month == 3 && day <= 20) {
    return 1;
  }
  
  if(month == 3 && day >= 21 && day <= 31 || month == 4 && day <= 19) {
    return 2;
  }

  if(month == 4 && day >= 20 && day <= 30 || month == 5 && day <= 20) {
    return 3;
  }

  if(month == 5 && day >= 21 && day <= 31 || month == 6 && day <= 20) {
    return 4;
  }

  if(month == 6 && day >= 21 && day <= 30 || month == 7 && day <= 22) {
    return 5;
  }

  if(month == 7 && day >= 23 && day <= 31 || month == 8 && day <= 22) {
    return 6;
  }

  if(month == 8 && day >= 23 && day <= 31 || month == 9 && day <= 22) {
    return 7;
  }

  if(month == 9 && day >= 23 && day <= 30 || month == 10 && day <= 22) {
    return 8;
  }

  if(month == 10 && day >= 23 && day <= 31 || month == 11 && day <= 21) {
    return 9;
  }

  if(month == 11 && day >= 22 && day <= 30 || month == 12 && day <= 21) {
    return 10;
  }

  if(month == 12 && day >= 22 && day <= 31 || month == 1 && day <= 19) {
    return 11;
  }
  else{
    return 12;
  }
}
