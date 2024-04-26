const showHiddenPass = (loginPassId, loginEyeId) => {
   const input = document.getElementById(loginPassId);
   const iconEye = document.getElementById(loginEyeId);

   if (!input || !iconEye) {
       console.error('Input or eye icon not found');
       return;
   }
   iconEye.addEventListener('click', () => {
      if (input.type === 'password') {
         input.type = 'text';
         iconEye.classList.add('ri-eye-line');
         iconEye.classList.remove('ri-eye-off-line');
      } else {
         input.type = 'password';
         iconEye.classList.remove('ri-eye-line');
         iconEye.classList.add('ri-eye-off-line');
      }
   });
};

document.addEventListener('DOMContentLoaded', () => {
   showHiddenPass('password', 'login-eye');
});
