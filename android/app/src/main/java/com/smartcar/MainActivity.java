package com.smartcar;

import com.facebook.react.ReactActivity;
public class MainActivity extends ReactActivity {
String externalDataPath;
    String[] fileToBeCopied = {"eng.cube.bigrams", "eng.cube.fold", "eng.cube.lm", "eng.cube.nn", "eng.cube.params", "eng.cube.size", "eng.cube.word-freq", "eng.tesseract_cube.nn", "eng.traineddata","equ.traineddata"};

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "smartCar";
  }
}
