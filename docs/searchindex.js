Search.setIndex({docnames:["api","index","overview"],envversion:52,filenames:["api.rst","index.rst","overview.rst"],objects:{"ulwd.AInScanFlag":{DEFAULT:[0,1,1,""],NOCALIBRATEDATA:[0,1,1,""],NOSCALEDATA:[0,1,1,""]},"ulwd.AiChanType":{DISABLED:[0,1,1,""],RTD:[0,1,1,""],SEMICONDUCTOR:[0,1,1,""],TC:[0,1,1,""],THERMISTOR:[0,1,1,""],VOLTAGE:[0,1,1,""]},"ulwd.AiConfig":{get_adc_timing_mode:[0,2,1,""],get_auto_zero_mode:[0,2,1,""],get_cal_date:[0,2,1,""],get_chan_coupling_mode:[0,2,1,""],get_chan_iepe_mode:[0,2,1,""],get_chan_offset:[0,2,1,""],get_chan_sensor_sensitivity:[0,2,1,""],get_chan_slope:[0,2,1,""],get_chan_tc_type:[0,2,1,""],get_chan_temp_unit:[0,2,1,""],get_chan_type:[0,2,1,""],set_adc_timing_mode:[0,2,1,""],set_auto_zero_mode:[0,2,1,""],set_chan_coupling_mode:[0,2,1,""],set_chan_iepe_mode:[0,2,1,""],set_chan_offset:[0,2,1,""],set_chan_sensor_sensitivity:[0,2,1,""],set_chan_slope:[0,2,1,""],set_chan_tc_type:[0,2,1,""],set_chan_temp_unit:[0,2,1,""],set_chan_type:[0,2,1,""]},"ulwd.AiDevice":{a_in_load_queue:[0,2,1,""],a_in_scan:[0,2,1,""],get_config:[0,2,1,""],get_scan_status:[0,2,1,""],scan_stop:[0,2,1,""]},"ulwd.AiInputMode":{DIFFERENTIAL:[0,1,1,""],PSEUDO_DIFFERENTIAL:[0,1,1,""],SINGLE_ENDED:[0,1,1,""]},"ulwd.AiQueueElement":{channel:[0,1,1,""],input_mode:[0,1,1,""],range:[0,1,1,""]},"ulwd.DaqDevice":{connect:[0,2,1,""],disconnect:[0,2,1,""],get_ai_device:[0,2,1,""],get_descriptor:[0,2,1,""],is_connected:[0,2,1,""],release:[0,2,1,""]},"ulwd.DaqDeviceDescriptor":{dev_interface:[0,1,1,""],dev_string:[0,1,1,""],product_id:[0,1,1,""],product_name:[0,1,1,""],unique_id:[0,1,1,""]},"ulwd.InterfaceType":{ANY:[0,1,1,""],BLUETOOTH:[0,1,1,""],ETHERNET:[0,1,1,""],USB:[0,1,1,""]},"ulwd.Range":{BIP10VOLTS:[0,1,1,""],BIP15VOLTS:[0,1,1,""],BIP1PT25VOLTS:[0,1,1,""],BIP1PT67VOLTS:[0,1,1,""],BIP1VOLTS:[0,1,1,""],BIP20VOLTS:[0,1,1,""],BIP2PT5VOLTS:[0,1,1,""],BIP2VOLTS:[0,1,1,""],BIP30VOLTS:[0,1,1,""],BIP4VOLTS:[0,1,1,""],BIP5VOLTS:[0,1,1,""],BIP60VOLTS:[0,1,1,""],BIPPT005VOLTS:[0,1,1,""],BIPPT01VOLTS:[0,1,1,""],BIPPT05VOLTS:[0,1,1,""],BIPPT078VOLTS:[0,1,1,""],BIPPT125VOLTS:[0,1,1,""],BIPPT156VOLTS:[0,1,1,""],BIPPT1VOLTS:[0,1,1,""],BIPPT25VOLTS:[0,1,1,""],BIPPT2VOLTS:[0,1,1,""],BIPPT312VOLTS:[0,1,1,""],BIPPT5VOLTS:[0,1,1,""],BIPPT625VOLTS:[0,1,1,""]},"ulwd.ScanOption":{BLOCKIO:[0,1,1,""],BURSTIO:[0,1,1,""],BURSTMODE:[0,1,1,""],CONTINUOUS:[0,1,1,""],DEFAULTIO:[0,1,1,""],EXTCLOCK:[0,1,1,""],EXTTRIGGER:[0,1,1,""],RETRIGGER:[0,1,1,""],SINGLEIO:[0,1,1,""]},"ulwd.ScanStatus":{IDLE:[0,1,1,""],RUNNING:[0,1,1,""]},"ulwd.TcType":{B:[0,1,1,""],E:[0,1,1,""],J:[0,1,1,""],K:[0,1,1,""],N:[0,1,1,""],R:[0,1,1,""],S:[0,1,1,""],T:[0,1,1,""]},"ulwd.TempUnit":{CELSIUS:[0,1,1,""],FAHRENHEIT:[0,1,1,""],KELVIN:[0,1,1,""]},"ulwd.ULError":{ADC_OVERRUN:[0,1,1,""],ALREADY_ACTIVE:[0,1,1,""],BAD_AI_CHAN:[0,1,1,""],BAD_AI_CHAN_QUEUE:[0,1,1,""],BAD_AI_CHAN_TYPE:[0,1,1,""],BAD_AI_GAIN_QUEUE:[0,1,1,""],BAD_BUFFER:[0,1,1,""],BAD_BUFFER_SIZE:[0,1,1,""],BAD_BURSTIO_COUNT:[0,1,1,""],BAD_CONFIG_ITEM:[0,1,1,""],BAD_CONFIG_VAL:[0,1,1,""],BAD_COUPLING_MODE:[0,1,1,""],BAD_DEV_HANDLE:[0,1,1,""],BAD_DEV_TYPE:[0,1,1,""],BAD_FLAG:[0,1,1,""],BAD_IEPE_MODE:[0,1,1,""],BAD_INFO_ITEM:[0,1,1,""],BAD_INPUT_MODE:[0,1,1,""],BAD_MEM_REGION:[0,1,1,""],BAD_MEM_TYPE:[0,1,1,""],BAD_OPTION:[0,1,1,""],BAD_QUEUE_SIZE:[0,1,1,""],BAD_RANGE:[0,1,1,""],BAD_RATE:[0,1,1,""],BAD_SAMPLE_COUNT:[0,1,1,""],BAD_SENSOR_SENSITIVITY:[0,1,1,""],BAD_TC_TYPE:[0,1,1,""],BAD_TRIG_TYPE:[0,1,1,""],BAD_UNIT:[0,1,1,""],CONFIG_NOT_SUPPORTED:[0,1,1,""],DEAD_DEV:[0,1,1,""],DEV_NOT_CONNECTED:[0,1,1,""],DEV_NOT_FOUND:[0,1,1,""],INTERNAL:[0,1,1,""],NO_ERROR:[0,1,1,""],OVERRUN:[0,1,1,""],TIMEDOUT:[0,1,1,""],UNDERRUN:[0,1,1,""],UNHANDLED_EXCEPTION:[0,1,1,""],USB_INTERFACE_CLAIMED:[0,1,1,""]},"ulwd.ULException":{error_code:[0,1,1,""],error_message:[0,1,1,""]},ulwd:{AInScanFlag:[0,0,1,""],AiChanType:[0,0,1,""],AiConfig:[0,0,1,""],AiDevice:[0,0,1,""],AiInputMode:[0,0,1,""],AiQueueElement:[0,0,1,""],DaqDevice:[0,0,1,""],DaqDeviceDescriptor:[0,0,1,""],InterfaceType:[0,0,1,""],Range:[0,0,1,""],ScanOption:[0,0,1,""],ScanStatus:[0,0,1,""],TcType:[0,0,1,""],TempUnit:[0,0,1,""],ULError:[0,0,1,""],ULException:[0,3,1,""],create_float_buffer:[0,4,1,""],get_daq_device_inventory:[0,4,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","attribute","Python attribute"],"2":["py","method","Python method"],"3":["py","exception","Python exception"],"4":["py","function","Python function"]},objtypes:{"0":"py:class","1":"py:attribute","2":"py:method","3":"py:exception","4":"py:function"},terms:{"class":1,"default":0,"float":0,"function":0,"import":2,"int":0,"return":[0,2],"true":0,For:2,IDE:2,Not:0,One:0,The:[0,2],These:0,Use:0,Used:0,_ctype:[],a_in_load_queu:0,a_in_scan:[0,2],a_in_scan_iep:2,about:[0,2],access:[0,2],acquir:[],acquisit:0,actual:0,adc:0,adc_overrun:0,adctimingmod:0,addit:0,address:0,after:0,aichanqueuelimit:[],aichantyp:0,aiconfig:1,aidevic:1,aiinfo:[],aiinputmod:0,ainscanflag:0,aiqueueel:0,aiqueuetyp:[],all:0,alloc:0,allow:[0,2],alreadi:0,already_act:0,also:2,analog:[1,2],analog_rang:0,ani:0,api:2,appear:[],appli:0,argument:[],arm:0,arrai:[0,2],ascend:[],ascending_chan:[],associ:0,attribut:0,auto:0,autozeromod:0,avail:[0,2],background:0,bad_ai_chan:0,bad_ai_chan_queu:0,bad_ai_chan_typ:0,bad_ai_gain_queu:0,bad_buff:0,bad_buffer_s:0,bad_burstio_count:0,bad_config_item:0,bad_config_v:0,bad_coupling_mod:0,bad_dev_handl:0,bad_dev_typ:0,bad_flag:0,bad_iepe_mod:0,bad_info_item:0,bad_input_mod:0,bad_mem_region:0,bad_mem_typ:0,bad_opt:0,bad_queue_s:0,bad_rang:0,bad_rat:0,bad_sample_count:0,bad_sensor_sensit:0,bad_tc_typ:0,bad_trig_typ:0,bad_unit:0,base:0,befor:[0,2],begin:0,being:0,bip10volt:0,bip15volt:0,bip1pt25volt:0,bip1pt67volt:0,bip1volt:0,bip20volt:0,bip2pt5volt:0,bip2volt:0,bip30volt:0,bip4volt:0,bip5volt:0,bip60volt:0,bippt005volt:0,bippt01volt:0,bippt05volt:0,bippt078volt:0,bippt125volt:0,bippt156volt:0,bippt1volt:0,bippt25volt:0,bippt2volt:0,bippt312volt:0,bippt5volt:0,bippt625volt:0,bit:0,block:0,blockio:0,bluetooth:0,board:0,bool:0,buffer:1,burst:0,burstio:0,burstmod:0,calibr:0,call:0,callback:[],can:[0,2],cannot:0,capabl:[0,2],capac:0,celsiu:0,chan:[],chan_typ:0,chang:[],channel:[0,2],choos:2,claim:0,clock:0,code:[0,2],collect:0,com:2,commun:0,complet:[0,2],comput:[0,2],condit:0,config:0,config_not_support:0,configur:[0,2],connect:[0,2],constant:1,contain:0,continu:0,control:[0,2],convers:0,convert:0,corpor:2,count:0,coupl:0,couplingmod:0,creat:[0,1],create_float_buff:0,current:0,daq:0,daq_device_descriptor:0,daqdevic:1,daqdevicedescriptor:0,daqeventtyp:[],data:[0,2],date:0,dead_dev:0,def:[],defaultio:0,defin:0,demonstr:2,describ:0,descript:[0,2],detector:0,determin:0,dev_interfac:0,dev_not_connect:0,dev_not_found:0,dev_str:0,devic:[1,2],differenti:0,disabl:0,disable_ev:[],disconnect:0,discoveri:1,document:2,doubl:0,download:2,each:0,eclips:2,element:0,enabl:0,enable_ev:[],end:0,endless:0,enough:0,enter:2,enumer:[0,2],environ:2,epoch:0,error:0,error_cod:0,error_messag:0,establish:0,ethernet:0,event:0,event_callback_arg:[],event_callback_funct:[],event_data:[],event_typ:[],eventcallbackarg:[],exampl:1,except:0,exist:0,extclock:0,extern:0,extract:2,exttrigg:0,factor:0,fahrenheit:0,fals:0,fast:0,field:0,fifo:0,file:2,file_nam:2,finit:0,first:0,flag:0,folder:2,follow:2,format:0,found:0,from:[0,2],full:0,gain:0,gener:0,get:0,get_adc_timing_mod:0,get_ai_devic:0,get_auto_zero_mod:0,get_cal_d:0,get_chan_coupling_mod:0,get_chan_iepe_mod:0,get_chan_offset:0,get_chan_queue_limit:[],get_chan_sensor_sensit:0,get_chan_slop:0,get_chan_tc_typ:0,get_chan_temp_unit:0,get_chan_typ:0,get_config:0,get_daq_device_inventori:0,get_descriptor:0,get_info:0,get_max_queue_length:[],get_queue_typ:[],get_rang:0,get_scan_opt:[],get_scan_statu:0,github:2,global:1,greater:0,handl:0,hardwar:[0,2],has:0,have:[],here:[],high_channel:0,how:2,identifi:0,idl:0,iep:[0,2],iepemod:0,implement:2,includ:2,index:0,indic:0,info:0,inform:[0,2],input:[1,2],input_mod:0,insert:[],instal:1,instanc:0,instead:2,integ:0,interfac:[0,2],interface_typ:0,interfacetyp:0,intern:0,introduct:1,invalid:0,is_connect:0,item:0,kelvin:0,knowledgebas:2,languag:[0,2],last:0,librari:[0,2],libulwd:2,limit:[],linux:[0,2],list:[0,2],load:0,logger:0,longer:0,loop:0,lost:0,low_channel:0,mac:0,mai:0,manag:[1,2],mani:0,maximum:0,mcc:[0,2],mccdaq:2,measur:[0,2],memori:0,messag:0,met:0,method:[1,2],minim:0,mode:0,more:[0,2],most:0,multipl:0,multipli:0,must:[],name:[0,2],namedtupl:0,nativ:0,no_error:0,nocalibratedata:0,none:0,noscaledata:0,number:0,number_of_channel:0,number_of_devic:0,numer:0,object:[0,2],obtain:[0,2],occur:0,offset:0,on_data_avail:[],on_input_scan_error:[],on_output_scan_error:[],onc:[],one:0,onli:0,open:2,oper:0,option:0,order:[],otherwis:0,out:0,output:0,over:2,overrun:0,packag:2,packet:0,paramet:0,particular:0,pass:[],per:0,perform:[0,2],physic:0,platform:2,point:0,precis:0,process:0,product:0,product_id:0,product_nam:0,program:1,progress:0,properti:0,prototyp:[],provid:[0,2],pseudo:0,pseudo_differenti:0,pycharm:2,queue:0,rais:0,rang:[0,2],rate:0,read:0,readm:2,reason:2,receiv:0,recommend:0,refer:2,referenc:0,region:0,releas:0,remov:0,resist:0,resourc:0,respond:0,retriev:0,retrigg:0,rtd:0,run:[0,2],sampl:0,samples_per_channel:0,scale:0,scan:[0,2],scan_stop:[0,2],scanopt:0,scanstatu:0,scanstatusinfo:0,search:0,second:0,see:[],semiconductor:0,sensit:0,sensor:0,serial:0,set:[0,2],set_adc_timing_mod:0,set_auto_zero_mod:0,set_chan_coupling_mod:0,set_chan_iepe_mod:[0,2],set_chan_offset:0,set_chan_sensor_sensit:[0,2],set_chan_slop:0,set_chan_tc_typ:0,set_chan_temp_unit:0,set_chan_typ:0,share:2,should:0,signal:0,similar:0,singl:0,single_end:0,singleio:0,size:0,skew:0,slope:0,slow:0,small:0,specif:0,specifi:0,speed:0,statu:0,step:2,stop:0,storag:0,store:[0,2],string:0,struct:0,structur:[0,2],subset:[],subsystem:1,suitabl:0,support:[0,1],system:[0,2],tc_type:0,tctype:0,technic:2,temp_unit:0,temperatur:0,tempunit:0,termin:2,than:0,thermistor:0,thermocoupl:0,thi:0,three:[],time:0,timedout:0,togeth:0,too:0,total:0,transfer:0,trigger:0,type:1,uldaq:2,ulerror:0,ulexcept:1,ulwd:2,underrun:0,unhandl:0,unhandled_except:0,uniqu:0,unique_chan:[],unique_id:0,unit:0,univers:0,unix:0,unqualifi:0,usag:[],usb:0,usb_interface_claim:0,use:[0,2],used:0,user:[0,2],user_data:[],using:[0,2],usual:0,valid:[],valu:0,volt:0,voltag:0,wai:0,webdaq:[0,2],well:0,when:[0,2],which:0,whose:0,window:2,wise:0,within:[],without:0,written:0,www:2,your:2,zero:0},titles:["Python API Reference","UL for Linux Python (WebDAQ) API Reference","Introduction"],titleterms:{"class":0,aiconfig:0,aidevic:0,analog:0,api:[0,1],buffer:0,constant:0,creat:2,daqdevic:0,devic:0,discoveri:0,event:[],exampl:2,global:0,index:1,input:0,instal:2,introduct:2,linux:1,manag:0,method:0,program:2,python:[0,1,2],refer:[0,1],subsystem:0,support:2,type:0,ulexcept:0,usag:[],webdaq:1}})