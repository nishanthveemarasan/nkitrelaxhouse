<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ABCD</title>
    <style>
        * {
            font-family: "Source Sans Pro", sans-serif;
            /* font-size: 10px; */
        }

        .th-header-billing {
            background-color: #f2f2f2;
            text-align: left;
            padding: 5px 0 5px 4px;
        }

        .header-table {
            border-collapse: collapse;
        }

        .border-table {
            border: 1px solid;
            width: 100%;
        }

        .header-table tr td {
            border: 1px solid #f2f2f2;
            padding: 10px 0 10px 4px;
            /* font-size: 0.8rem; */

        }

        td div {
            padding: 0.2rem 0 0.2rem 0.2rem;
            /* font-size:1rem; */
        }

        .heading {
            font-weight: bold;
            /* font-size: 1rem; */
            margin-bottom: 10px;
        }

        td {
            padding: 10px 20px 10px 4px;
        }

        .header-table tr:nth-child(even) {
            background-color: #f2f2f2;
        }

        .invoice-table-align {
            display: flex;
            justify-content: center;
        }

        .th-header-invoice {
            background-color: lightblue;
            text-align: center;
            font-size: 0.9rem;
            padding: 10px 0 10px 0;
        }
    </style>
</head>

<body>
    <div>
        <table style="width:100%;margin-bottom:20px">
            <tr>
                <td style="text-align: center" colspan="3">
                    <span class="mt-1" style="color:#4286B9;font-size:3.5rem;font-weight:bold">Invoice</span>
                </td>
            </tr>
            <tr>
                <td style="text-align: center;" colspan="3">
                    <div style="font-size:1.5rem">
                        <strong>CHOLA TRANSPORT LTD</strong>
                    </div>
                    <div style="font-size:0.95rem">
                        14 Adersford Close, Brockley, London SE4 2AE
                    </div>
                    <div style="font-size:0.95rem">
                        Tel: 07772425624, Email: v4ashman@hotmail.co.uk
                    </div>
                </td>
            </tr>
        </table>
        <hr style="margin: 30px 0 30px 0" />
        <div style="margin: 0 3%">
            <table class="mb-3" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
                <td width="50%" valign="top">
                    <table class="header-table" width="100%">
                        <thead>
                            <th colspan="2" class="th-header-billing" style="font-size: 1rem;padding:1.5% 2%">BILL TO</th>
                        </thead>
                        <tr style="font-size: 1rem;">
                            <td style="padding:5px 0 0 10px">
                                <div><strong>Belvedere warehousing & Distribution </strong></div>
                                <div>Unit 8, Mulberry way</div>
                                <div>Belvedere</div>
                                <div>Kent</div>
                                <div>DA17 6AN</div>
                            </td>
                        </tr>
                    </table>
                </td>
                <td style="border-color: white;width:2%">&nbsp;</td>
                <td width="38%" valign="top">
                    <table class="header-table" width="100%">

                        <thead>
                            <th class="th-header-billing" style="font-size: 1rem;padding:1.5% 2%">INVOICE DETAILS</th>
                        </thead>
                        <tr style="font-size: 1rem">
                            <table width="100%">
                                <tr style="font-size: 1rem">
                                    <td style="width:30%">
                                        <div style="display: flex; justify-content: space-between">
                                            <span>
                                                <strong>Invoice Date </strong>
                                            </span>
                                            <span>
                                                :
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        14/09/2022
                                    </td>
                                </tr>
                                <tr style="font-size: 1rem">
                                    <td style="width:30%">
                                        <div style="display: flex; justify-content: space-between">
                                            <span>
                                                <strong>Invoice Number </strong>
                                            </span>
                                            <span>
                                                :
                                            </span>
                                        </div>
                                    </td>
                                    <td>

                                    </td>
                                </tr>
                                <tr style="font-size: 1rem">
                                    <td style="width:30%">
                                        <div style="display: flex; justify-content: space-between">
                                            <span>
                                                <strong>Client Reference </strong>
                                            </span>
                                            <span>
                                                :
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        Transport Service
                                    </td>
                                </tr>
                                <tr style="font-size: 1rem">
                                    <td style="width:30%">
                                        <div style="display: flex; justify-content: space-between">
                                            <span>
                                                <strong>DUE DATE </strong>
                                            </span>
                                            <span>
                                                :
                                            </span>
                                        </div>
                                    </td>
                                    <td>

                                    </td>
                                </tr>
                            </table>
                        </tr>
                    </table>
                </td>
            </table>
            <div style="margin: 40px 0">
                <table width="100%">
                    <thead>
                        <th style="text-align: left">Additional Information</th>
                    </thead>
                    <tr style="font-size: 1rem">
                        <td>
                            For Service provided by CHOLA TRANSPORT LTD to Belvedere warehousing & Distribution
                        </td>
                    </tr>
                </table>
            </div>
            <div class="invoice-table-align">
                <table class="header-table" width="80%" style="font-size: 10px;">
                    <thead>
                        <th class="th-header-invoice">Description</th>
                        <th class="th-header-invoice">Service</th>
                        <th class="th-header-invoice">Rate</th>
                        <th class="th-header-invoice">Service Price</th>
                        <th class="th-header-invoice">Total</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="text-align:center;font-size:0.9rem">12/09/2022(54543)</td>
                            <td style="text-align:center;font-size:0.9rem">1</td>
                            <td style="text-align:center;font-size:0.9rem">£260.00</td>
                            <td style="text-align:center;font-size:0.9rem">£260.00</td>
                            <td style="text-align: right;padding-right:15px;font-size:0.9rem">£260.00</td>
                        </tr>
                        <tr>
                            <td style="text-align:center;font-size:0.9rem">13/09/2022(54544)</td>
                            <td style="text-align:center;font-size:0.9rem">1</td>
                            <td style="text-align:center;font-size:0.9rem">£280.00</td>
                            <td style="text-align:center;font-size:0.9rem">£280.00</td>
                            <td style="text-align: right;padding-right:15px;font-size:0.9rem">£280.00</td>
                        </tr>
                        <tr>
                            <td colspan="4" style="text-align: right;padding-right:5px; font-size:1rem"><strong>SUB TOTAL</strong></td>
                            <td style="text-align: right;padding-right:15px;font-size:0.9rem"><strong>£800.00</strong></td>
                        </tr>
                        <tr>
                            <td colspan="4" style="text-align: right;padding-right:5px;font-size:1rem"><strong>TOTAL</strong></td>
                            <td style="text-align: right;padding-right:15px;font-size:0.9rem"><strong>£800.00</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div style="text-align: right;padding-right:10%;margin-top:1%; font-weight:bold">
                * Payment should be made as per the agreed terms
            </div>
        </div>
        <hr style="margin: 50px 0 20px 0" />
        <div style="margin: 0 3%">
            <div style="display: flex; justify-content: space-between">
                <div>
                    <div style="margin-bottom: 10px;"><strong>Registered Address </strong> </div>
                    <div style="font-size:1rem;margin-bottom: 3px;">14 Aldersford Close</div>
                    <div style="font-size:1rem;margin-bottom: 3px;">Brockley</div>
                    <div style="font-size:1rem;margin-bottom: 3px;">London, SE4 2AE</div>
                </div>
                <div>
                    <div style="margin-bottom: 10px;"><strong>Contact Information </strong> </div>
                    <div style="font-size:1rem;margin-bottom: 3px;">Rathivarman Soundararasha</div>
                    <div style="font-size:1rem;margin-bottom: 3px;">Phone: 07772425624</div>
                    <div style="font-size:1rem;margin-bottom: 3px;">Email: v4ashman@hotmail.co.uk</div>
                </div>
                <div>
                    <div style="margin-bottom: 10px;"><strong>Payment Details </strong> </div>
                    <div style="font-size:1rem;margin-bottom: 3px;">Bank Name : HSBC</div>
                    <div style="font-size:1rem;margin-bottom: 3px;">Sort-Code : 40 02 05</div>
                    <div style="font-size:1rem;margin-bottom: 3px;">Account No : 91723820</div>
                </div>
            </div>

            <div style="text-align: center;margin-top:50px;margin-bottom:35px;font-size:2rem;font-weight:bold">
                Thank you for your business!
            </div>
        </div>

    </div>
</body>

</html>