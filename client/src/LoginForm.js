import { useLayoutEffect } from "react";

const LoginForm = () => {

    let client_id = '';
    let client_secret = '';
    
    const requestAuthorization = () => {
        const authorize_uri = "https//accounts.spotify.com/authorize";
        const redirect_uri = "http://192.168.0.175:3000";
        client_id = document.getElementById("clientId").value;
        client_secret = document.getElementById("clientSecret").value;
        localStorage.setItem("client_id", client_id);
        localStorage.setItem("client_secret", client_secret); // TODO hide from client
    
        let url = authorize_uri;
        url += "?client_id=" + client_id;
        url += "&response_type=code";
        url += "&redirect_uri=" + encodeURI(redirect_uri);
        url += "&show_dialog=true";
        url += "&scope=user-read-private user-read-email user-modify-playback-state user-read-playback-position user-library-read streaming user-read-playback-state user-read-recently-played playlist-read-private";
        window.location.href = url;
    }

    return (
        <div>
            <div>
                <div>
                    <label htmlFor="clientId">Client ID</label>
                    <input type="text" id="clientId" placeholder=""></input>
                </div>
                <div>
                    <label htmlFor="clientSecret">Client Secret</label>
                    <input type="text" id="clientSecret" placeholder=""></input>
                </div>
            </div>
            <button onClick={requestAuthorization}>
            Request Authorization
            </button>
        </div>
    )
}

export default LoginForm;