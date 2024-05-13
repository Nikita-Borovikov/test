    var paragraph = document.getElementById("myParagraph");
    var texts = ["Usługi informatyczne", "doświadczenie, niezawodność, konkurencyjne ceny"];
    var index = 0;

    function changeText() {
      paragraph.style.opacity = 0; 
      setTimeout(function() {
        paragraph.textContent = texts[index];
        index = (index + 1) % texts.length;
        paragraph.style.opacity = 1; 
      }, 500); 
    }

    setInterval(changeText, 3000); 