var db = firebase.firestore();
function sendform() {
    let form_data = {
        name: $('#form-name'),
        email: $('#form-email'),
        msg: $('#form-msg'),
    }

    db.collection("forms").add({
        name: form_data.name.val(),
        email: form_data.email.val(),
        msg: form_data.msg.val()
    })
        .then(function (docRef) {
            form_data.name.val('');
            form_data.email.val('');
            form_data.msg.val('');

            Swal.fire({
                title: 'Thanks for being awesome!',
                showConfirmButton: false,
                html: `<p class="alert-msg">I have received your message and would like to thank you for writing to me. If your inquiry is urgent, please use the phone number listed below to talk to me directly. Otherwise, I will reply by email as soon as possible.<br/><br/>
                Talk to you soon,<br/><br/>
                <i>Shoaib Amin</i><br/>
                <i>shoaibsivany@hotmail.com</i><br/>
                <i>+92 331 2111 050</i><br/></p>`,
                width: 550,
                padding: '2em',
                background: '#fff',
                backdrop: `
              rgba(0,0,123,0.4)
              url("assets/img/rainbow.gif")
              left top
              no-repeat
            `
            })


        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });

    return true;
}

function show_project_details(arg) {
    let details = {
        title: '',
        html: '',
    };
    switch (arg) {
        case 'promit':
            details.title = '<h5 class="project-title">React ECommerce Application</h5>';
            details.html = `<h6 class="project-images-title">Project Images</h6><img class="project-imgs" src="assets/porfolio-imgs/promit1.JPG"/><img class="project-imgs" src="assets/porfolio-imgs/promit2.png"/><img class="project-imgs" src="assets/porfolio-imgs/promit3.png"/>
            <h5 class="project-desc">Description:</h5>
            <p class="project-desc-list">- Je</p>
            <p class="project-desc-list">- Je</p>
            <p class="project-desc-list">- Je</p>
            <div class="grid">
                <div><img src="assets/icons/express.png" alt=""></div>
                <div><img src="assets/icons/mongodb.png" alt=""></div>
                <div><img src="assets/icons/firebase.png" alt=""></div>
                <div><img src="assets/icons/axios.png" alt=""></div>
                <div><img src="assets/icons/es6.png" alt=""></div>
            </div>


            `

            break;

        default:
            break;
    }

    Swal.fire({
        title: details.title,
        showConfirmButton: false,
        html: details.html
    })
}

