# ga-opt-switcher
This is a simple Javascript code so visitors can opt-in or out for Google Analytics cookies.

Installation:
1. First copy <code>ga-opt-switcher.js</code> to your folder where you want to implement the script.
2. Change the value's for your Google Analytics property (<code>gaProperty</code>) and desired styling colors (<code>colorON</code> and <code>colorOff</code>).
3. Make sure you have implemented the Google Analytics default tracking code on the pages you wish to track.
4. On the page you want to enable users to change the tracking of Google Analytics cookies paste this code:
		
   <code>Google Analytics tracking is <span id=\"status\"><\/span>.
  <a href=\"javascript:gaOpt()\">Click here to <span id=\"opt\"><\/span>.<\/a>
	<script src="ga-opt-switcher.js" type="text/javascript"></script></code>
    
    Above code will show up as following:
    
    Google Analytics tracking is active.
    Click here to disable.
    
 This is my first repo, so if you got any questions or improvements, please let me know! :)
