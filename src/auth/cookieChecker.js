import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

var Cookie = require('js-cookie');

const Swal = require('sweetalert2');

export default function CookieChecker() {

    const nav = useNavigate();

    const tokenName = "_SSIDmuhajirin";
    const username = "_userMuhajirin";

    useEffect(() => {

        if (Cookie.get(tokenName) === undefined || Cookie.get(username) === undefined) {

            Cookie.remove(tokenName);
            Cookie.remove(username);

            nav("/")

        } else {

            getValidToken();

        }

    }, [Cookie.get(tokenName), Cookie.get(username)]);

    const getValidToken = () => {

        axios
            .post("http://localhost:4000/validateToken", {
                username: Cookie.get(username),
                token: Cookie.get(tokenName)
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

                            Cookie.remove(tokenName);
                            Cookie.remove(username);

                            nav("/")

                        })

                }
                Cookie.remove(tokenName);
                Cookie.remove(username);
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
                nav("/");
            });
    }
}