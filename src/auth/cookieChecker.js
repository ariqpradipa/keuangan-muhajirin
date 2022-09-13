import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

const Swal = require('sweetalert2');

export default function CookieChecker() {

    const nav = useNavigate();

    const tokenName = "_SSIDmuhajirin";
    const username = "_userMuhajirin";

    useEffect(() => {

        if (Cookies.get(tokenName) === undefined || Cookies.get(username) === undefined) {

            Cookies.remove(tokenName);
            Cookies.remove(username);

            nav("/")

        } else {

            getValidToken();

        }

    }, [Cookies.get(tokenName), Cookies.get(username)]);

    const getValidToken = () => {

        axios
            .post("http://localhost:4000/validateToken", {
                username: Cookies.get(username),
                token: Cookies.get(tokenName)
            })
            .then((response) => {

                if (response.data === 3302) {

                    nav("/home")
                    return;

                } else if (response.data === 4403) {

                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: ' ~Token expired~<br />Please login again',
                        showConfirmButton: true,
                    })
                        .then((result) => {

                            Cookies.remove(tokenName);
                            Cookies.remove(username);

                            nav("/")

                        })

                }
                Cookies.remove(tokenName);
                Cookies.remove(username);
            })
            .catch((error) => {
                console.log(error);
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Token expired',
                    showConfirmButton: false,
                    timer: 1000
                });
                window.location.href = "/";
            });
    }
}