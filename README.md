# GS1-128 Barcode-Decoder
Library to decode Code GS1 Barcodes

sample GS1-128 Barcode
> (01)99331079003789(3102)002835(13)221130(21)203788340029

This script is usefull if you want to extract the information in a GS1 Barcode.

The GS1-128 barcode (also called UCC-128 barcode) allows businesses to identify and track products as they move through the supply chain. These barcodes are used in labels applied to pallet shipments and individual cartons. 

A GS1-128 barcode is not just an ordinary number. It contains a wealth of important information, such as Global Trade Item Number (GTIN), batch/lot/serial numbers, product dates, and more. Retailers often require GS1-128 barcodes to improve inventory visibility and receiving efficiency.

The GS1-128 label helps a shipper (such as a supplier or 3PL) communicate with the buyer (such as a retailer or distributor) about the contents of a shipment.

include the script in your project and create a new object like this:
```
<script src="codegs1decoder.js"></script>
<script>
  let barcode = new codeGS1Decoder( document.querySelector('#gs1-128BarcodeHolder').value );
  const GTIN = document.querySelector('#gtin´);
  const packingDate = document.querySelector('#packingDate');
  const netWeightKgs = document.querySelector('#netWeightKgs');

  GTIN.value = barcode.GTIN;
  packingDate.value = barcode.PackingDate;
  netWeightKgs.value = barcode.NetWeightKgs;
</script>
```

Still need little fixes, everyone is welcome to make it better!
