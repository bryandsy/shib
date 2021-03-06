//
// Autogenerated by Thrift Compiler (0.8.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var Thrift = require('node-thrift').Thrift;
var fb303_ttypes = require('./fb303_types')
var hive_metastore_ttypes = require('./hive_metastore_types')
var queryplan_ttypes = require('./queryplan_types')


var ThriftHiveMetastore = require('./ThriftHiveMetastore')
var ThriftHiveMetastoreClient = ThriftHiveMetastore.Client
var ThriftHiveMetastoreProcessor = ThriftHiveMetastore.Processor
var ttypes = require('./hive_service_types');
//HELPER FUNCTIONS AND STRUCTURES

var ThriftHive_execute_args = function(args) {
  this.query = null;
  if (args) {
    if (args.query !== undefined) {
      this.query = args.query;
    }
  }
};
ThriftHive_execute_args.prototype = {};
ThriftHive_execute_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.query = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ThriftHive_execute_args.prototype.write = function(output) {
  output.writeStructBegin('ThriftHive_execute_args');
  if (this.query) {
    output.writeFieldBegin('query', Thrift.Type.STRING, 1);
    output.writeString(this.query);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ThriftHive_execute_result = function(args) {
  this.ex = null;
  if (args) {
    if (args.ex !== undefined) {
      this.ex = args.ex;
    }
  }
};
ThriftHive_execute_result.prototype = {};
ThriftHive_execute_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.ex = new ttypes.HiveServerException();
        this.ex.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ThriftHive_execute_result.prototype.write = function(output) {
  output.writeStructBegin('ThriftHive_execute_result');
  if (this.ex) {
    output.writeFieldBegin('ex', Thrift.Type.STRUCT, 1);
    this.ex.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ThriftHive_fetchOne_args = function(args) {
};
ThriftHive_fetchOne_args.prototype = {};
ThriftHive_fetchOne_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ThriftHive_fetchOne_args.prototype.write = function(output) {
  output.writeStructBegin('ThriftHive_fetchOne_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ThriftHive_fetchOne_result = function(args) {
  this.success = null;
  this.ex = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.ex !== undefined) {
      this.ex = args.ex;
    }
  }
};
ThriftHive_fetchOne_result.prototype = {};
ThriftHive_fetchOne_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRING) {
        this.success = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.ex = new ttypes.HiveServerException();
        this.ex.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ThriftHive_fetchOne_result.prototype.write = function(output) {
  output.writeStructBegin('ThriftHive_fetchOne_result');
  if (this.success) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeString(this.success);
    output.writeFieldEnd();
  }
  if (this.ex) {
    output.writeFieldBegin('ex', Thrift.Type.STRUCT, 1);
    this.ex.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ThriftHive_fetchN_args = function(args) {
  this.numRows = null;
  if (args) {
    if (args.numRows !== undefined) {
      this.numRows = args.numRows;
    }
  }
};
ThriftHive_fetchN_args.prototype = {};
ThriftHive_fetchN_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.numRows = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ThriftHive_fetchN_args.prototype.write = function(output) {
  output.writeStructBegin('ThriftHive_fetchN_args');
  if (this.numRows) {
    output.writeFieldBegin('numRows', Thrift.Type.I32, 1);
    output.writeI32(this.numRows);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ThriftHive_fetchN_result = function(args) {
  this.success = null;
  this.ex = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.ex !== undefined) {
      this.ex = args.ex;
    }
  }
};
ThriftHive_fetchN_result.prototype = {};
ThriftHive_fetchN_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.LIST) {
        var _size0 = 0;
        var _rtmp34;
        this.success = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = input.readString();
          this.success.push(elem6);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.ex = new ttypes.HiveServerException();
        this.ex.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ThriftHive_fetchN_result.prototype.write = function(output) {
  output.writeStructBegin('ThriftHive_fetchN_result');
  if (this.success) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRING, this.success.length);
    for (var iter7 in this.success)
    {
      if (this.success.hasOwnProperty(iter7))
      {
        iter7 = this.success[iter7];
        output.writeString(iter7);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.ex) {
    output.writeFieldBegin('ex', Thrift.Type.STRUCT, 1);
    this.ex.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ThriftHive_fetchAll_args = function(args) {
};
ThriftHive_fetchAll_args.prototype = {};
ThriftHive_fetchAll_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ThriftHive_fetchAll_args.prototype.write = function(output) {
  output.writeStructBegin('ThriftHive_fetchAll_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ThriftHive_fetchAll_result = function(args) {
  this.success = null;
  this.ex = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.ex !== undefined) {
      this.ex = args.ex;
    }
  }
};
ThriftHive_fetchAll_result.prototype = {};
ThriftHive_fetchAll_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.LIST) {
        var _size8 = 0;
        var _rtmp312;
        this.success = [];
        var _etype11 = 0;
        _rtmp312 = input.readListBegin();
        _etype11 = _rtmp312.etype;
        _size8 = _rtmp312.size;
        for (var _i13 = 0; _i13 < _size8; ++_i13)
        {
          var elem14 = null;
          elem14 = input.readString();
          this.success.push(elem14);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.ex = new ttypes.HiveServerException();
        this.ex.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ThriftHive_fetchAll_result.prototype.write = function(output) {
  output.writeStructBegin('ThriftHive_fetchAll_result');
  if (this.success) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRING, this.success.length);
    for (var iter15 in this.success)
    {
      if (this.success.hasOwnProperty(iter15))
      {
        iter15 = this.success[iter15];
        output.writeString(iter15);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.ex) {
    output.writeFieldBegin('ex', Thrift.Type.STRUCT, 1);
    this.ex.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ThriftHive_getSchema_args = function(args) {
};
ThriftHive_getSchema_args.prototype = {};
ThriftHive_getSchema_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ThriftHive_getSchema_args.prototype.write = function(output) {
  output.writeStructBegin('ThriftHive_getSchema_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ThriftHive_getSchema_result = function(args) {
  this.success = null;
  this.ex = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.ex !== undefined) {
      this.ex = args.ex;
    }
  }
};
ThriftHive_getSchema_result.prototype = {};
ThriftHive_getSchema_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new hive_metastore_ttypes.Schema();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.ex = new ttypes.HiveServerException();
        this.ex.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ThriftHive_getSchema_result.prototype.write = function(output) {
  output.writeStructBegin('ThriftHive_getSchema_result');
  if (this.success) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.ex) {
    output.writeFieldBegin('ex', Thrift.Type.STRUCT, 1);
    this.ex.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ThriftHive_getThriftSchema_args = function(args) {
};
ThriftHive_getThriftSchema_args.prototype = {};
ThriftHive_getThriftSchema_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ThriftHive_getThriftSchema_args.prototype.write = function(output) {
  output.writeStructBegin('ThriftHive_getThriftSchema_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ThriftHive_getThriftSchema_result = function(args) {
  this.success = null;
  this.ex = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.ex !== undefined) {
      this.ex = args.ex;
    }
  }
};
ThriftHive_getThriftSchema_result.prototype = {};
ThriftHive_getThriftSchema_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new hive_metastore_ttypes.Schema();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.ex = new ttypes.HiveServerException();
        this.ex.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ThriftHive_getThriftSchema_result.prototype.write = function(output) {
  output.writeStructBegin('ThriftHive_getThriftSchema_result');
  if (this.success) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.ex) {
    output.writeFieldBegin('ex', Thrift.Type.STRUCT, 1);
    this.ex.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ThriftHive_getClusterStatus_args = function(args) {
};
ThriftHive_getClusterStatus_args.prototype = {};
ThriftHive_getClusterStatus_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ThriftHive_getClusterStatus_args.prototype.write = function(output) {
  output.writeStructBegin('ThriftHive_getClusterStatus_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ThriftHive_getClusterStatus_result = function(args) {
  this.success = null;
  this.ex = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.ex !== undefined) {
      this.ex = args.ex;
    }
  }
};
ThriftHive_getClusterStatus_result.prototype = {};
ThriftHive_getClusterStatus_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.HiveClusterStatus();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.ex = new ttypes.HiveServerException();
        this.ex.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ThriftHive_getClusterStatus_result.prototype.write = function(output) {
  output.writeStructBegin('ThriftHive_getClusterStatus_result');
  if (this.success) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.ex) {
    output.writeFieldBegin('ex', Thrift.Type.STRUCT, 1);
    this.ex.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ThriftHive_getQueryPlan_args = function(args) {
};
ThriftHive_getQueryPlan_args.prototype = {};
ThriftHive_getQueryPlan_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ThriftHive_getQueryPlan_args.prototype.write = function(output) {
  output.writeStructBegin('ThriftHive_getQueryPlan_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ThriftHive_getQueryPlan_result = function(args) {
  this.success = null;
  this.ex = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.ex !== undefined) {
      this.ex = args.ex;
    }
  }
};
ThriftHive_getQueryPlan_result.prototype = {};
ThriftHive_getQueryPlan_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new queryplan_ttypes.QueryPlan();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.ex = new ttypes.HiveServerException();
        this.ex.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ThriftHive_getQueryPlan_result.prototype.write = function(output) {
  output.writeStructBegin('ThriftHive_getQueryPlan_result');
  if (this.success) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.ex) {
    output.writeFieldBegin('ex', Thrift.Type.STRUCT, 1);
    this.ex.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ThriftHive_clean_args = function(args) {
};
ThriftHive_clean_args.prototype = {};
ThriftHive_clean_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ThriftHive_clean_args.prototype.write = function(output) {
  output.writeStructBegin('ThriftHive_clean_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ThriftHive_clean_result = function(args) {
};
ThriftHive_clean_result.prototype = {};
ThriftHive_clean_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ThriftHive_clean_result.prototype.write = function(output) {
  output.writeStructBegin('ThriftHive_clean_result');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ThriftHiveClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this.seqid = 0;
    this._reqs = {};
};
Thrift.inherits(ThriftHiveClient, ThriftHiveMetastoreClient)
ThriftHiveClient.prototype.execute = function(query, callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_execute(query);
};

ThriftHiveClient.prototype.send_execute = function(query) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('execute', Thrift.MessageType.CALL, this.seqid);
  var args = new ThriftHive_execute_args();
  args.query = query;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ThriftHiveClient.prototype.recv_execute = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ThriftHive_execute_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.ex) {
    return callback(result.ex);
  }
  callback(null)
};
ThriftHiveClient.prototype.fetchOne = function(callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_fetchOne();
};

ThriftHiveClient.prototype.send_fetchOne = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('fetchOne', Thrift.MessageType.CALL, this.seqid);
  var args = new ThriftHive_fetchOne_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ThriftHiveClient.prototype.recv_fetchOne = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ThriftHive_fetchOne_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.ex) {
    return callback(result.ex);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('fetchOne failed: unknown result');
};
ThriftHiveClient.prototype.fetchN = function(numRows, callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_fetchN(numRows);
};

ThriftHiveClient.prototype.send_fetchN = function(numRows) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('fetchN', Thrift.MessageType.CALL, this.seqid);
  var args = new ThriftHive_fetchN_args();
  args.numRows = numRows;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ThriftHiveClient.prototype.recv_fetchN = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ThriftHive_fetchN_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.ex) {
    return callback(result.ex);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('fetchN failed: unknown result');
};
ThriftHiveClient.prototype.fetchAll = function(callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_fetchAll();
};

ThriftHiveClient.prototype.send_fetchAll = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('fetchAll', Thrift.MessageType.CALL, this.seqid);
  var args = new ThriftHive_fetchAll_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ThriftHiveClient.prototype.recv_fetchAll = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ThriftHive_fetchAll_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.ex) {
    return callback(result.ex);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('fetchAll failed: unknown result');
};
ThriftHiveClient.prototype.getSchema = function(callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_getSchema();
};

ThriftHiveClient.prototype.send_getSchema = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getSchema', Thrift.MessageType.CALL, this.seqid);
  var args = new ThriftHive_getSchema_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ThriftHiveClient.prototype.recv_getSchema = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ThriftHive_getSchema_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.ex) {
    return callback(result.ex);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getSchema failed: unknown result');
};
ThriftHiveClient.prototype.getThriftSchema = function(callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_getThriftSchema();
};

ThriftHiveClient.prototype.send_getThriftSchema = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getThriftSchema', Thrift.MessageType.CALL, this.seqid);
  var args = new ThriftHive_getThriftSchema_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ThriftHiveClient.prototype.recv_getThriftSchema = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ThriftHive_getThriftSchema_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.ex) {
    return callback(result.ex);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getThriftSchema failed: unknown result');
};
ThriftHiveClient.prototype.getClusterStatus = function(callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_getClusterStatus();
};

ThriftHiveClient.prototype.send_getClusterStatus = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getClusterStatus', Thrift.MessageType.CALL, this.seqid);
  var args = new ThriftHive_getClusterStatus_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ThriftHiveClient.prototype.recv_getClusterStatus = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ThriftHive_getClusterStatus_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.ex) {
    return callback(result.ex);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getClusterStatus failed: unknown result');
};
ThriftHiveClient.prototype.getQueryPlan = function(callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_getQueryPlan();
};

ThriftHiveClient.prototype.send_getQueryPlan = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getQueryPlan', Thrift.MessageType.CALL, this.seqid);
  var args = new ThriftHive_getQueryPlan_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ThriftHiveClient.prototype.recv_getQueryPlan = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ThriftHive_getQueryPlan_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.ex) {
    return callback(result.ex);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getQueryPlan failed: unknown result');
};
ThriftHiveClient.prototype.clean = function(callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_clean();
};

ThriftHiveClient.prototype.send_clean = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('clean', Thrift.MessageType.CALL, this.seqid);
  var args = new ThriftHive_clean_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ThriftHiveClient.prototype.recv_clean = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ThriftHive_clean_result();
  result.read(input);
  input.readMessageEnd();

  callback(null)
};
var ThriftHiveProcessor = exports.Processor = function(handler) {
  this._handler = handler
}
Thrift.inherits(ThriftHiveProcessor, ThriftHiveMetastoreProcessor)
ThriftHiveProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.Exception, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
}

ThriftHiveProcessor.prototype.process_execute = function(seqid, input, output) {
  var args = new ThriftHive_execute_args();
  args.read(input);
  input.readMessageEnd();
  var result = new ThriftHive_execute_result();
  this._handler.execute(args.query, function (success) {
    result.success = success;
    output.writeMessageBegin("execute", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

ThriftHiveProcessor.prototype.process_fetchOne = function(seqid, input, output) {
  var args = new ThriftHive_fetchOne_args();
  args.read(input);
  input.readMessageEnd();
  var result = new ThriftHive_fetchOne_result();
  this._handler.fetchOne(function (success) {
    result.success = success;
    output.writeMessageBegin("fetchOne", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

ThriftHiveProcessor.prototype.process_fetchN = function(seqid, input, output) {
  var args = new ThriftHive_fetchN_args();
  args.read(input);
  input.readMessageEnd();
  var result = new ThriftHive_fetchN_result();
  this._handler.fetchN(args.numRows, function (success) {
    result.success = success;
    output.writeMessageBegin("fetchN", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

ThriftHiveProcessor.prototype.process_fetchAll = function(seqid, input, output) {
  var args = new ThriftHive_fetchAll_args();
  args.read(input);
  input.readMessageEnd();
  var result = new ThriftHive_fetchAll_result();
  this._handler.fetchAll(function (success) {
    result.success = success;
    output.writeMessageBegin("fetchAll", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

ThriftHiveProcessor.prototype.process_getSchema = function(seqid, input, output) {
  var args = new ThriftHive_getSchema_args();
  args.read(input);
  input.readMessageEnd();
  var result = new ThriftHive_getSchema_result();
  this._handler.getSchema(function (success) {
    result.success = success;
    output.writeMessageBegin("getSchema", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

ThriftHiveProcessor.prototype.process_getThriftSchema = function(seqid, input, output) {
  var args = new ThriftHive_getThriftSchema_args();
  args.read(input);
  input.readMessageEnd();
  var result = new ThriftHive_getThriftSchema_result();
  this._handler.getThriftSchema(function (success) {
    result.success = success;
    output.writeMessageBegin("getThriftSchema", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

ThriftHiveProcessor.prototype.process_getClusterStatus = function(seqid, input, output) {
  var args = new ThriftHive_getClusterStatus_args();
  args.read(input);
  input.readMessageEnd();
  var result = new ThriftHive_getClusterStatus_result();
  this._handler.getClusterStatus(function (success) {
    result.success = success;
    output.writeMessageBegin("getClusterStatus", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

ThriftHiveProcessor.prototype.process_getQueryPlan = function(seqid, input, output) {
  var args = new ThriftHive_getQueryPlan_args();
  args.read(input);
  input.readMessageEnd();
  var result = new ThriftHive_getQueryPlan_result();
  this._handler.getQueryPlan(function (success) {
    result.success = success;
    output.writeMessageBegin("getQueryPlan", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

ThriftHiveProcessor.prototype.process_clean = function(seqid, input, output) {
  var args = new ThriftHive_clean_args();
  args.read(input);
  input.readMessageEnd();
  var result = new ThriftHive_clean_result();
  this._handler.clean(function (success) {
    result.success = success;
    output.writeMessageBegin("clean", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

