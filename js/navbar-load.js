var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function navbarSetup()
{
	setDate();

    updateClock();
 	return(setInterval(updateClock, 1000));
}

function updateClock()
{
	var dt = new Date();
	var seconds = dt.getSeconds().toString();
	var minutes = dt.getMinutes().toString();
	var hours = dt.getHours().toString();
	var time = (('0'  + hours).slice(-2) + ':' + ('0'  + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2));

	$("#time").text(" " + time);

}

function setDate()
{
	var dt = new Date();
	var day = dt.getDate().toString();
	var month = dt.getMonth()
	var year = dt.getFullYear().toString();
	var date = (monthNames[month] + " " + ('0'  + day).slice(-2) + ', ' + year);

	$("#date").text(" " + date);
}
