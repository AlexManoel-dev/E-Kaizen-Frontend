import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Background, ModalContent, Form, FormContent, Submit } from './style';
import Swal from "sweetalert2";
import InputMask from "react-input-mask";

export default function Budget({ showModal, setShowModal }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [cep, setCep] = useState('');
    const [tel, setTel] = useState('');

    const modalRef = useRef();

    const keyPress = useCallback(
        (e) => {
            if (e.key === "Escape" && showModal) setShowModal(!showModal);
        },
        [setShowModal, showModal]
    );

    useEffect(() => {
        document.addEventListener("keydown", keyPress);
        return () => document.removeEventListener("keydown", keyPress);
    }, [keyPress]);

    async function handleSubmit(e) {
        e.preventDefault();

        Swal.fire('Sucesso!', 'Orçamento criado', 'success');
        setTimeout(() => {
            setShowModal(false);
            window.location.reload();
        }, 1500);
    }

    return (
        <>
            {showModal ?
                (
                    <Background
                        ref={modalRef}
                        onClick={(e) => {
                            if (modalRef.current === e.target) {
                                setShowModal(!showModal);
                            }
                        }}
                    >
                        <ModalContent>
                            <Form onSubmit={handleSubmit}>
                                <h3>Formulário de Interesse</h3>
                                <FormContent>
                                    <label>Nome:</label>
                                    <input
                                        type="text"
                                        value={name}
                                        placeholder="Ex: João Castro"
                                        onChange={e => setName(e.target.value)}
                                        required
                                    />
                                    <label>Email:</label>
                                    <input
                                        type="email"
                                        value={email}
                                        placeholder="Ex: email@gmail.com"
                                        onChange={e => setEmail(e.target.value)}
                                        required
                                    />
                                    <label>CPF:</label>
                                    <InputMask
                                        mask="999.999.999-99"
                                        value={cpf}
                                        placeholder="Ex: 000.000.000-00"
                                        onChange={(e) => setCpf(e.target.value)}
                                        style={{
                                            height: '30px',
                                            borderRadius: '7px',
                                            border: '1px solid',
                                            marginBottom: '15px',
                                            padding: '10px',
                                            textAlign: 'center'
                                        }}
                                        pattern='^\d{3}.\d{3}.\d{3}-\d{2}$'
                                        required
                                    />
                                    <label>CEP:</label>
                                    <InputMask
                                        mask="99999-999"
                                        value={cep}
                                        placeholder="Ex: 00000-000"
                                        onChange={(e) => setCep(e.target.value)}
                                        style={{
                                            height: '30px',
                                            borderRadius: '7px',
                                            border: '1px solid',
                                            marginBottom: '15px',
                                            padding: '10px',
                                            textAlign: 'center'
                                        }}
                                        pattern="\d{5}-?\d{3}"
                                        required
                                    />
                                    <label>Telefone:</label>
                                    <InputMask
                                        mask="(99) 99999-9999"
                                        value={tel}
                                        placeholder="Ex: (00) 00000-0000"
                                        onChange={(e) => setTel(e.target.value)}
                                        style={{
                                            height: '30px',
                                            borderRadius: '7px',
                                            border: '1px solid',
                                            marginBottom: '15px',
                                            padding: '10px',
                                            textAlign: 'center'
                                        }}
                                        pattern="([^0-9]{0,}([0-9]{2})[^0-9]{0,}([0-9]{5})[^0-9]{0,}([0-9]{4}).*)"
                                        required
                                    />
                                </FormContent>
                                <Submit>Estou interessado!</Submit>
                            </Form>
                        </ModalContent>
                    </Background>
                )
                : null}
        </>
    );
};