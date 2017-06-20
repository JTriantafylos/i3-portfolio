window.onload = function()
{
	navbarSetup();
	promptSetup();
}

function promptSetup()
{
	var promptElem = document.getElementById("prompt");

	var commandType = Typed.new('#commandTop', {
        strings: ["mail jtriantafylos@gmail.com"],
        typeSpeed: 0,
		callback: function() {$('.typed-cursor').hide();
			setTimeout(showMailForm, 800)}
      });
}

function showMailForm()
{
	document.getElementById("contactForm").style.visibility = "visible";

	document.getElementById("content").innerHTML += '<p class="prompt-upper"><span class="user">james.triantafylos</span><span style="padding: 0px 2px;">@</span><span class="prompt-end">shchs ></span></p><p><span class="prompt-lower prompt-end">$ </span><span id="commandBottom"></span></p>';

	Typed.new('#commandBottom', {
        strings: [""],
        typeSpeed: 0
      });
}
