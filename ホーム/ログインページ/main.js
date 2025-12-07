document.addEventListener('DOMContentLoaded', function(){
    const help_login = document.querySelector('.help');
    help_login.addEventListener('click',() => {alert('頑張って思い出してください')});
    
    const login_btn = document.querySelector('.submit-btn');
    console.log(login_btn.textContent);
    login_btn.addEventListener('click', () => {
        const user_id = document.querySelector('.user-id-inform');
        const user_pw = document.querySelector('.user-pw-inform');
        alert(user_id.value);
        // console.log(user_id.value);
    });

});



