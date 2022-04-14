import React from 'react';
import { Table } from './style';
import { tablesData } from '../../../assets/data/tablesData.js';

export default function Specifications(){

    console.log(tablesData)

    return(
        <>
            <Table>
                {window.location.pathname === '/computers'
                    ?
                    <>
                        <thead>
                            {tablesData.titulosComputers.map((t,i) => (
                                <th>{t}</th>
                            ))}
                        </thead>
                        <tbody>
                            {tablesData.computers.map((t,i) => (
                                <tr key={i}>
                                    <td>{t.fabricante}</td>
                                    <td>{t.processador}</td>
                                    <td>{t.memoriaRam}</td>
                                    <td>{t.memoria}</td>
                                    <td>{t.preco}</td>
                                    <td>{t.imagem}</td>
                                </tr>
                            ))}
                        </tbody>
                    </>
                    : window.location.pathname === '/peripherals'
                                ?
                                <>
                                <thead>
                                    {tablesData.titulosPeripherals.map((t,i) => (
                                        <th>{t}</th>
                                    ))}
                                </thead>
                                <tbody>
                                    {tablesData.peripherals.map((t,i) => (
                                        <tr key={i}>
                                            <td>{t.fabricante}</td>
                                            <td>{t.modelo}</td>
                                            <td>{t.rgb}</td>
                                            <td>{t.cor}</td>
                                            <td>{t.preco}</td>
                                            <td>{t.imagem}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </>
                        : window.location.pathname === '/videogames'
                                  ?
                                  <>
                                  <thead>
                                      {tablesData.titulosVideogames.map((t,i) => (
                                          <th>{t}</th>
                                      ))}
                                  </thead>
                                  <tbody>
                                      {tablesData.videogames.map((t,i) => (
                                          <tr key={i}>
                                              <td>{t.fabricante}</td>
                                              <td>{t.modelo}</td>
                                              <td>{t.cor}</td>
                                              <td>{t.memoria}</td>
                                              <td>{t.controles}</td>
                                              <td>{t.preco}</td>
                                              <td>{t.imagem}</td>
                                          </tr>
                                      ))}
                                  </tbody>
                              </>
                              : null
                }
            </Table>
        </>
    );
};