
      $(document).ready(function() {
        let cookie = getCookieValue('candidate_accept_cookies_guest');
        if (!cookie) {
          $('.cookies-snackbar').show();
        }
      });
    
      function getCookieValue(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
      }
    
      function saveCookie() {
        const sixMonths = 182 * 24 * 60 * 60;
        document.cookie = `candidate_accept_cookies_guest=true; max-age=${sixMonths}; path=/; domain=.laporteservice.com.br`;
        $('.cookies-snackbar').hide();
      }
    
  