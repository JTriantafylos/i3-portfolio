window.onload = function()
{
	promptSetup();
	navbarSetup();
}

function gitSetup()
{
	document.getElementById("content").innerHTML += '<i class="fa fa-github term-icon"></i> <a href="https://github.com/jtriantafylos" class="git-link" target="_blank" style="font-weight: bold;">Profile<br></a>';

	$.ajax( {
    	url : "https://api.github.com/users/jtriantafylos/repos",
    	dataType : "jsonp",
    	success : function ( returndata ) {
			var count = returndata.data.length;
			$.each(returndata.data, function ( i, item ) {
				if(this.name != null)
				{
					document.getElementById("content").innerHTML += '<a href=" ' + this.html_url + '" class="git-link" target="_blank">> ' + this.name +'<br></a>';
					if(i+1 == count)
					{
						document.getElementById("content").innerHTML += '<p><span style="color: #a3be8c;">###</span> Click on any of the repositories above to be taken to the project page, <br> <span style="color: #a3be8c;">###</span> or click on the "Profile" link to be taken to my GitHub Profile.</p>';
						document.getElementById("content").innerHTML += '<p><span style="color: #a3be8c;">###</span> This repository list will be automatically kept up to date with any <br> <span style="color: #a3be8c;">###</span> and all projects that I choose to display on my GitHub.</p>';

						document.getElementById("content").innerHTML += '<p><br><span style="color: #a3be8c;">###</span> As a firm believer in open-source software I offer any code worked on<br> <span style="color: #a3be8c;">###</span>  or written by me to be used by anyone as long as proper credit is given.</p>';

						setTimeout(showInformation, 800)
					}
				}
				else
				{
					document.getElementById("content").innerHTML += '<span class="unaccessible git-link">↪ Repositories not currently accessible. Please try again later. <br></span>';
					setTimeout(showInformation, 800)
					return false;
				}
			});
    	}
	});
}

function promptSetup()
{
	var promptElem = document.getElementById("prompt");

	var commandType = Typed.new('#commandTop', {
        strings: ["git clone jtriantafylos.*"],
        typeSpeed: 0,
		callback: function() {$('.typed-cursor').hide();
			setTimeout(showInformationInit, 800)}
      });
}

function showInformationInit()
{
	document.getElementById("information1").textContent = "Repositories cloned to ~/github/!";

	document.getElementById("content").innerHTML += '<p class="prompt-upper"><span class="user">james.triantafylos</span><span style="padding: 0px 2px;">@</span><span class="prompt-end">shchs ></span></p><p><span class="prompt-lower prompt-end">$ </span><span id="commandMiddle"></span></p>';

	Typed.new('#commandMiddle', {
        strings: ["ls ~/github/"],
        typeSpeed: 0,
		callback: function() {$('.typed-cursor').hide();
			setTimeout(gitSetup, 800)}
      });
}

function showInformation()
{
	document.getElementById("content").innerHTML += '<p class="prompt-upper"><span class="user">james.triantafylos</span><span style="padding: 0px 2px;">@</span><span class="prompt-end">shchs ></span></p><p><span class="prompt-lower prompt-end">$ </span><span id="commandBottom"></span></p>';

	Typed.new('#commandBottom', {
        strings: [""],
        typeSpeed: 0
      });
}
