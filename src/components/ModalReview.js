import React, {useState,useEffect} from "react";
import {addReview, deleteReview, getReview, updateReview} from "../api/reviews";
import {Modal} from "react-bootstrap";
import {Rating} from "@mui/material";
import {editarPerfil} from "../api/user";
import {notification} from "antd";

const ModalReview = (props) => {

    const userId = props.userId
    const orderId = props.orderId

    const [reviewId, setReviewId] = useState(0);
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleShow = () => {
        setReview()
    }

    const handleClose = () => {
        setShow(false);
        setShow2(false);
    }

    const [inputs, setInputs] = useState({
        reviewContent: "",
        reviewRating: "",
        OrderItemId: "",
        UserId: ""
    });

    async function setReview(){
        const review = await getReview(userId,orderId);
        if (review.length > 0) {
            setInputs({
                ...inputs,
                reviewContent: review[0].reviewContent,
                reviewRating: review[0].reviewRating,
                OrderItemId: orderId,
                UserId: userId
            });
            setShow(true);
            setReviewId(review[0].id);
        }
        else {
            setInputs({
                ...inputs,
                OrderItemId: orderId,
                UserId: userId
            });
            setShow2(true);
        }
    }

    const changeForm = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    const handleChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    }

    const modificarReview = async e => {
        e.preventDefault();
        console.log(orderId)
        const result = await updateReview(reviewId,inputs);
        window.location.href = "./ordenes";
    }

    const agregarReview = async e => {
        e.preventDefault();
        const result = await addReview(inputs);
        window.location.href = "./ordenes";
    }

    const eliminarReview = async e => {
        e.preventDefault();
        handleClose()
        const result = await deleteReview(reviewId);
        window.location.href = "./ordenes";
    }

    return(
        <>
            <button className="btn btn-primary fw-bold float-end" onClick={handleShow}>
                Rese??ar ??
            </button>

            <Modal id="modal" className="login" show={show} backdrop="static" keyboard={false} centered onHide={handleClose}>
                <form onChange={changeForm} onSubmit={modificarReview}>
                <Modal.Header closeButton closeVariant="white">
                    <Modal.Title className="text-white fw-bold">
                        <i className="bi bi-pencil-square me-3"></i>
                        Modifica tu rese??a
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="b-white text-center">
                    <Rating value = {parseInt(inputs.reviewRating)} name="reviewRating" onChange={handleChange} className="my-3" size="large" />
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control mb-3"
                            id="reviewRating"
                            name="reviewRating"
                            placeholder="reviewRating"
                            value = {inputs.reviewRating}
                            hidden
                        />
                        <label htmlFor="dir" className="ms-3">Rese??a</label>
                    </div>
                    <div className="form-floating">
                        <textarea
                            className="form-control mb-3 descripcion"
                            id="reviewContent"
                            name="reviewContent"
                            placeholder="reviewContent"
                            value = {inputs.reviewContent}
                        />
                        <label htmlFor="dir" className="ms-3">Cu??ntanos tu experiencia</label>
                    </div>
                </Modal.Body>
                <Modal.Footer className="b-white">
                    <button className="btn3 rounded fw-bold" onClick={eliminarReview}>
                        Eliminar
                    </button>
                    <button className="btn btn-primary fw-bold float-end" type="submit">
                        Guardar Cambios
                    </button>
                </Modal.Footer>
                </form>
            </Modal>

            <Modal id="modal" className="login" show={show2} backdrop="static" keyboard={false} centered onHide={handleClose}>
                <form onChange={changeForm} onSubmit={agregarReview}>
                    <Modal.Header closeButton closeVariant="white">
                        <Modal.Title className="text-white fw-bold">
                            <i className="bi bi-hand-thumbs-down-fill"></i>
                            <i className="bi bi-hand-thumbs-up-fill me-3"></i>
                            Eval??a tu orden
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="b-white text-center">
                        <Rating value = {parseInt(inputs.reviewRating)} name="reviewRating" onChange={handleChange} className="my-3" size="large" />
                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control mb-3"
                                id="reviewRating"
                                name="reviewRating"
                                placeholder="reviewRating"
                                value = {inputs.reviewRating}
                                hidden
                            />
                            <label htmlFor="dir" className="ms-3">Direcci??n</label>
                        </div>
                        <div className="form-floating">
                        <textarea
                            className="form-control mb-3 descripcion"
                            id="reviewContent"
                            name="reviewContent"
                            placeholder="reviewContent"
                            value = {inputs.reviewContent}
                        />
                            <label htmlFor="dir" className="ms-3">Cu??ntanos tu experiencia</label>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="b-white">
                        <button className="btn3 rounded fw-bold" onClick={handleClose}>
                            Cancelar
                        </button>
                        <button className="btn btn-primary fw-bold float-end" type="submit">
                            Calificar
                        </button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    )
}

export default ModalReview