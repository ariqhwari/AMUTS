'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

// masih belum bekerja, data yang dikirim dari query (formData) error ketika dipush. jadi untuk datanya belum bisa tampil

const receipt = ({ params }) => {

    const router = useRouter();

    return (
        <div className="bg-color-putih p-4 md:w-1/4 md:h-max top-0 left-0 w-full h-full flex items-center fixed justify-center">
            <div className="invoice-box">
                <Table>
                    <TableHeader>
                        <TableRow className="top">
                            <TableColumn colSpan='2' >
                                <Table>
                                    <TableRow>
                                        <TableColumn className="title">
                                            <Image src={"/img/logo-amuts.png"}
                                                alt="Company logo"
                                                className='max-w-full w-full'
                                                width={290}
                                                height={290}
                                            />
                                        </TableColumn>

                                        <TableColumn>
                                            Invoice #: 123<br />
                                            Created: January 1, 2023<br />
                                            Due: February 1, 2023
                                        </TableColumn>
                                    </TableRow>
                                </Table>
                            </TableColumn>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        <TableRow className="information">
                            <TableColumn colSpan="2">
                                <Table>
                                    <TableRow>
                                        <TableColumn>
                                            Sparksuite, Inc.<br />
                                            12345 Sunny Road<br />
                                            Sunnyville, TX 12345
                                        </TableColumn>

                                        <TableColumn>
                                            Acme Corp.<br />
                                            John Doe<br />
                                            john@example.com
                                        </TableColumn>
                                    </TableRow>
                                </Table>
                            </TableColumn>
                        </TableRow>

                        <TableRow className="heading">
                            <TableColumn>Payment Method</TableColumn>

                            <TableColumn>Check #</TableColumn>
                        </TableRow>

                        <TableRow className="details">
                            <TableColumn>Check</TableColumn>

                            <TableColumn>1000</TableColumn>
                        </TableRow>

                        <TableRow className="heading">
                            <TableColumn>Item</TableColumn>

                            <TableColumn>Price</TableColumn>
                        </TableRow>

                        <TableRow className="item">
                            <TableColumn>Website design</TableColumn>

                            <TableColumn>$300.00</TableColumn>
                        </TableRow>

                        <TableRow className="item">
                            <TableColumn>Hosting (3 months)</TableColumn>

                            <TableColumn>$75.00</TableColumn>
                        </TableRow>

                        <TableRow className="item last">
                            <TableColumn>Domain name (1 year)</TableColumn>

                            <TableColumn>$10.00</TableColumn>
                        </TableRow>

                        <TableRow className="total">
                            <TableColumn></TableColumn>

                            <TableColumn>Total: $385.00</TableColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
            <h1 className='flex justify-center items-center'>Konfirmasi {params.id}</h1>
            <hr />
            <div className='grid grid-cols-2 gap-2'>
                <div>
                    <h2>ID</h2>
                    <p placeholder='id'>{params.id}</p>
                </div>
                <div>
                    <h2>Nama</h2>
                    <p placeholder='Nama'>budi</p>
                </div>
                <div>
                    <h2>Alamat</h2>
                    <p>adada</p>
                </div>
                <div>
                    <h2>No. Telp</h2>
                    <p>123121</p>
                </div>
                <div>
                    <h2>Jenis Sampah</h2>
                    <p>gg</p>
                </div>
                <div>
                    <h2>Jumlah Sampah</h2>
                    <p>12</p>
                </div>
                <div>
                    <h2>Harga per Kilo</h2>
                    <p>11223</p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center my-2'>
                <h2>Total Harga</h2>
                <p>Rp.23123123,00</p>
            </div>
        </div >
    );
};

export default receipt;