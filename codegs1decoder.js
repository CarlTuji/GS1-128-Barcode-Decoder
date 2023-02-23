class codeGS1Decoder {
  // The constructor method will take a number of parameters and assign those parameters as properties to the created object.
  constructor( gs1barcode ){
    this.barcode = gs1barcode.replace(/([()])/g,''); // remove parentheses if any
    this.GTIN = this.getGTIN( this.barcode );
    this.LotNumber = this.getLotNumber( this.barcode );
    this.SerialNumber = this.getSerialNumber( this.barcode );
    this.ProductionDate = this.getProductionDate( this.barcode );
    this.PackingDate = this.getPackingDate( this.barcode );
    this.SellByDate = this.getSellByDate( this.barcode );
    this.ExpirationDate = this.getExpirationDate( this.barcode );
    this.NetWeightKgs = this.getNetWeightKgs( this.barcode );
    this.GrossWeightKgs = this.getGrossWeightKgs( this.barcode );
    this.NetWeightPounds = this.getNetWeightPounds( this.barcode );
    this.GrossWeightPounds = this.getGrossWeightPounds( this.barcode );
  }

  getGTIN = ( barcode ) => {
    const rePID=/^(01)([0-9]{14})/;
    var pID = rePID.exec(barcode);
    return (pID)?pID[2]:'';
  }

  getLotNumber = ( barcode ) => {
    const reLotNumber=/(10)([0-9]{1,20})?/g;
    var LotNumber = reLotNumber.exec(barcode);
    return (LotNumber)?LotNumber[2]:'';
  }

  getSerialNumber = ( barcode ) => {
    const reSerialNumber=/(21)([0-9]{1,20})?/g;
    var SerialNumber = reSerialNumber.exec(barcode);
    return (SerialNumber)?SerialNumber[2]:'';
  }

  getProductionDate = ( barcode ) => {
    const reProductionDate=/(11)([0-9]{6})?/g;
    var productionDate = reProductionDate.exec(barcode);
    return (productionDate)?productionDate[2]:'';
  }

  getPackingDate = ( barcode ) => {
    const rePackingDate=/(13)([0-9]{6})?/g;
    var packingDate = rePackingDate.exec(barcode);
    return (packingDate)?packingDate[2]:'';
  }

  getSellByDate = ( barcode ) => {
    const reSellByDate=/(15)([0-9]{6})?/g;
    var SellByDate = reSellByDate.exec(barcode);
    return (SellByDate)?SellByDate[2]:'';
  }

  getExpirationDate = ( barcode ) => {
    const reExpiration=/(17)([0-9]{6})?/g;
    var expiration = reExpiration.exec(barcode);
    return (expiration)?expiration[2]:'';
  }

  getNetWeightKgs = ( barcode ) => {
    const reNetWeightKgs=/(310[0-4]{1})([0-9]{6})?/g;
    var netWeightKgs = reNetWeightKgs.exec(barcode);
    
    // let calculate the weight
    if( netWeightKgs ){
      var identifier = netWeightKgs[1];
      var value = netWeightKgs[2];
      var decimals = Number( identifier.replace(/^(31)/, '') );
      
      var factor=1;
      for( let i=1; i<=decimals; i++ ){
        factor*=10;
      }
      
      value=(value/factor).toFixed(decimals);
    }
    return value;
  }

  getGrossWeightKgs = ( barcode ) => {
    const reGrossWeightKgs=/(330[0-4]{1})([0-9]{6})?/g;
    var grossWeightKgs = reGrossWeightKgs.exec(barcode);
    
    // let calculate the weight
    if( grossWeightKgs ){
      var identifier = grossWeightKgs[1];
      var value = grossWeightKgs[2];
      var decimals = Number( identifier.replace(/^(33)/, '') );
      
      var factor=1;
      for( let i=1; i<=decimals; i++ ){
        factor*=10;
      }
      
      value=(value/factor).toFixed(decimals);
    }
    return value;
  }

  getNetWeightPounds = ( barcode ) => {
    const reNetWeightPounds=/(320[0-4]{1})([0-9]{6})?/g;
    var netWeightPounds = reNetWeightPounds.exec(barcode);
    
    // let calculate the weight
    if( netWeightPounds ){
      var identifier = netWeightPounds[1];
      var value = netWeightPounds[2];
      var decimals = Number( identifier.replace(/^(32)/, '') );
      
      var factor=1;
      for( let i=1; i<=decimals; i++ ){
        factor*=10;
      }
      
      value=(value/factor).toFixed(decimals);
    }
    return value;
  }

  getGrossWeightPounds = ( barcode ) => {
    const reGrossWeightPounds=/(340[0-4]{1})([0-9]{6})?/g;
    var grossWeightPounds = reGrossWeightPounds.exec(barcode);
    
    // let calculate the weight
    if( grossWeightPounds ){
      var identifier = grossWeightPounds[1];
      var value = grossWeightPounds[2];
      var decimals = Number( identifier.replace(/^(34)/, '') );
      
      var factor=1;
      for( let i=1; i<=decimals; i++ ){
        factor*=10;
      }
      
      value=(value/factor).toFixed(decimals);
    }
    return grossWeightPounds;
  }
}
