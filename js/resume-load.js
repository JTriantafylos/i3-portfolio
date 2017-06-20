window.onload = function()
{
	promptSetup();
	navbarSetup();
}

function promptSetup()
{
	var promptElem = document.getElementById("prompt");

	var commandType = Typed.new('#commandTop', {
        strings: ["resume -u james.triantafylos"],
        typeSpeed: 0,
		callback: function() {$('.typed-cursor').hide();
			setTimeout(showInformation, 800)}
      });

}

function showInformation()
{
	document.getElementById("resume").style.visibility = "visible";

	$("#resume-left").css("margin-bottom", ($('#resume-right').height() - $('#resume-left').height()));

	document.getElementById("content").innerHTML += '<p class="prompt-upper"><span class="user">james.triantafylos</span><span style="padding: 0px 2px;">@</span><span class="prompt-end">shchs ></span></p><p><span class="prompt-lower prompt-end">$ </span><span id="commandBottom"></span></p>';

	Typed.new('#commandBottom', {
        strings: [""],
        typeSpeed: 0
      });

}
