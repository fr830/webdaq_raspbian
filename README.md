## Using Raspbian on a WebDAQ

These files and instructions support overwriting the MCC firmware on a WebDAQ with Raspbian in order to create a customized
data acquisition system.  Complete information is in [Webdaq_Raspbian.pdf](https://github.com/nwright-mcc/webdaq_raspbian/raw/master/Webdaq_Raspbian.pdf).

### Driver Installation

1. After installing Raspbian per the document, download the DAQ driver:

```sh
  wget https://github.com/nwright-mcc/webdaq_raspbian/raw/master/libulwd.0.0.1-b1.tar.bz2
```

2. Extract and install the driver:

``` sh
  tar -xvjf libulwd.0.0.1-b1.tar.bz2
```

3. Run the following commands to install the library:

``` sh
  cd libulwd
  sudo sh install.sh
```

4. Reboot the WebDAQ system

### Examples
The C examples are located in the examples folder. Run the following commands to build the examples:

``` sh
  cd ~/libulwd/examples
  make
```

To execute the examples, run the following commands:

``` sh
  ./AInScan
  ./AInScan_IEPE
```

#### Note: The DAQ module's firmware is stored in a volatile memory, therefore the firmware image will be lost when the WebDAQ system is shut down. The ulGetDeviceInventory function loads the firmware image to the module when it is invoked for the first time after system boot up. Loading the firmware image takes about 5 to 8 seconds.


