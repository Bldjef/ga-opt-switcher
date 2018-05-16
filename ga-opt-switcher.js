/*
MIT License

Copyright (c) 2018 Jeffrey - Thispage.nl

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

// Set to the same value as the web property used on the site
var gaProperty = 'UA-xxxxxxxx-x';

// Set colors for the status message ()
var colorOn = 'orange';
var colorOff = 'red';

// Disable tracking if the opt-out cookie exists.
var disableStr = 'ga-disable-' + gaProperty;
if (document.cookie.indexOf(disableStr + '=true') > -1) {
  window[disableStr] = true;
}

// Get value of the GA disable cookie
var theCookie = getCookie('ga-disable-' + gaProperty);

    if (theCookie == null) {
        // if disable cookie doesn't exist
        // console.log("cookie not found: " + theCookie);
        document.getElementById("status").style.color = colorOn;
        document.getElementById("status").innerHTML = 'active';
        document.getElementById("opt").innerHTML = 'disable';
    }
    else {
        // if disabled cookie exists and GA cookies is being blocked
        //console.log("cookie found: " + theCookie);
       if (theCookie == 'true') {
            document.getElementById("status").style.color = colorOn;
            document.getElementById("status").innerHTML = 'active'; 
            document.getElementById("opt").innerHTML = 'disable';
       }
       // if disabled cookie exists and GA cookies is not being blocked
       if (theCookie == 'false') {
            document.getElementById("status").style.color = colorOff;
            document.getElementById("status").innerHTML = 'inactive'; 
            document.getElementById("opt").innerHTML = 'enable';
       }
    }

// function for getting the cookie name
function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }
    // because unescape has been deprecated, replaced with decodeURI
    //return unescape(dc.substring(begin + prefix.length, end));
    return decodeURI(dc.substring(begin + prefix.length, end));
}    

// function for enabling or disabling the cookie when user clicks the link
function gaOpt() {
  if (theCookie == null) {
          document.cookie = disableStr + '=false; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
          window[disableStr] = false;
          location.reload();
  }
  else {
         if (theCookie == 'true') {
            document.cookie = disableStr + '=false; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
            window[disableStr] = false;
            location.reload();
         }
         if (theCookie == 'false') {
            document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
            window[disableStr] = true;
            location.reload();
         }
  }
}
