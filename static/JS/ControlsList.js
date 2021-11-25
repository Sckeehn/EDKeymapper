export const bigBoi = {
  mouse : {name:'mouse', controls:['MouseXMode', 'MouseXDecay', 'MouseYMode', 'MouseYDecay', 'MouseReset', 'MouseSensitivity', 'MouseDecayRate', 'MouseDeadzone', 'MouseLinearity', 'MouseGUI']},
  flightRotation : {name:'flightRotation', controls:['YawAxisRaw', 'YawLeftButton', 'YawRightButton', 'YawToRollMode', 'YawToRollSensitivity', 'YawToRollMode_FAOff', 'YawToRollButton', 'RollAxisRaw', 'RollLeftButton', 'RollRightButton', 'PitchAxisRaw', 'PitchUpButton', 'PitchDownButton']},
  flightThrust : {name:'flightThrust', controls:['LateralThrustRaw', 'LeftThrustButton', 'RightThrustButton', 'VerticalThrustRaw', 'UpThrustButton', 'DownThrustButton', 'AheadThrust', 'ForwardThrustButton', 'BackwardThrustButton']},
  flightThrottle : {name:'flightThrottle', controls:['ThrottleAxis', 'ThrottleRange', 'ToggleReverseThrottleInput', 'ForwardKey', 'BackwardKey', 'ThrottleIncrement', 'SetSpeedMinus100', 'SetSpeedMinus75', 'SetSpeedMinus50', 'SetSpeedMinus25', 'SetSpeedZero', 'SetSpeed25', 'SetSpeed50', 'SetSpeed75', 'SetSpeed100']},
  alternateFlight : {name:'alternateFlight', controls:['UseAlternateFlightValuesToggle', 'YawAxisAlternate', 'RollAxisAlternate', 'PitchAxisAlternate', 'LateralThrustAlternate', 'VerticalThrustAlternate']},
  flightLandingOverrides : {name:'flightLandingOverrides', controls:['YawAxis_Landing','YawLeftButton_Landing', 'YawRightButton_Landing', 'YawToRollMode_Landing', 'PitchAxis_Landing', 'PitchUpButton_Landing', 'PitchDownButton_Landing', 'RollAxis_Landing', 'RollLeftButton_Landing', 'RollRightButton_Landing', 'LateralThrust_Landing','LeftThrustButton_Landing', 'RightThrustButton_Landing', 'VerticalThrust_Landing', 'UpThrustButton_Landing', 'DownThrustButton_Landing', 'AheadThrust_Landing','ForwardThrustButton_Landing', 'BackwardThrustButton_Landing']},
  flightMisc : {name:'flightMisc', controls:['ToggleFlightAssist', 'UseBoostJuice', 'HyperSuperCombination', 'Supercruise', 'Hyperspace', 'DisableRotationCorrectToggle', 'OrbitLinesToggle']},
  targeting : {name:'targeting', controls:['SelectTarget', 'CycleNextTarget', 'CyclePreviousTarget', 'SelectHighestThreat', 'CycleNextHostileTarget', 'CyclePreviousHostileTarget', 'TargetWingman0', 'TargetWingman1', 'TargetWingman2', 'SelectTargetsTarget', 'WingNavLock', 'CycleNextSubsystem', 'CyclePreviousSubsystem', 'TargetNextRouteSystem']},
  weapons : {name:'weapons', controls:['PrimaryFire', 'SecondaryFire', 'CycleFireGroupNext', 'CycleFireGroupPrevious', 'DeployHardpointToggle', 'DeployHardpointsOnFire', 'ToggleButtonUpInput', 'DeployHeatSink']},
  misc : {name:'misc', controls:['ShipSpotLightToggle', 'RadarRangeAxis', 'RadarIncreaseRange', 'RadarDecreaseRange', 'IncreaseEnginesPower', 'IncreaseWeaponsPower', 'IncreaseSystemsPower', 'ResetPowerDistribution', 'HMDReset', 'ToggleCargoScoop', 'EjectAllCargo', 'LandingGearToggle', 'MicrophoneMute', 'MuteButtonMode', 'CqcMuteButtonMode', 'UseShieldCell', 'FireChaffLauncher', 'ChargeECM', 'EnableRumbleTrigger', 'EnableMenuGroups', 'MouseGUI', 'WeaponColourToggle', 'EngineColourToggle', 'NightVisionToggle']},
  modeSwitches : {name:'modeSwitches', controls:['UIFocus', 'UIFocusMode', 'FocusLeftPanel', 'FocusCommsPanel', 'FocusOnTextEntryField', 'QuickCommsPanel', 'FocusRadarPanel', 'FocusRightPanel', 'LeftPanelFocusOptions', 'CommsPanelFocusOptions', 'RolePanelFocusOptions', 'RightPanelFocusOptions', 'EnableCameraLockOn','GalaxyMapOpen', 'SystemMapOpen', 'ShowPGScoreSummaryInput', 'HeadLookToggle', 'Pause', 'FriendsMenu', 'OpenCodexGoToDiscovery', 'PlayerHUDModeToggle', 'ExplorationFSSEnter']},
  interfaceMode : {name:'interfaceMode', controls:['UI_Up', 'UI_Down', 'UI_Left', 'UI_Right', 'UI_Select', 'UI_Back', 'UI_Toggle', 'CycleNextPanel', 'CyclePreviousPanel', 'CycleNextPage', 'CyclePreviousPage']},
  headlook : {name:'headlook', controls:['MouseHeadlook', 'MouseHeadlookInvert', 'MouseHeadlookSensitivity', 'HeadlookDefault', 'HeadlookIncrement', 'HeadlookMode', 'HeadlookResetOnToggle', 'HeadlookSensitivity', 'HeadlookSmoothing', 'HeadLookReset', 'HeadLookPitchUp', 'HeadLookPitchDown', 'HeadLookYawLeft', 'HeadLookYawRight']},
  galaxyMap : {name:'galaxyMap', controls:['CamPitchAxis', 'CamPitchUp', 'CamPitchDown', 'CamYawAxis','CamYawLeft', 'CamYawRight', 'CamTranslateYAxis', 'CamTranslateForward', 'CamTranslateBackward', 'CamTranslateXAxis', 'CamTranslateLeft', 'CamTranslateRight', 'CamTranslateZAxis', 'CamTranslateUp', 'CamTranslateDown', 'CamZoomAxis', 'CamZoomIn', 'CamZoomOut', 'CamTranslateZHold', 'GalaxyMapHome']},
  driving : {name:'driving', controls:['ToggleDriveAssist', 'DriveAssistDefault', 'MouseBuggySteeringXMode', 'MouseBuggySteeringXDecay', 'MouseBuggyRollingXMode', 'MouseBuggyRollingXDecay', 'MouseBuggyYMode', 'MouseBuggyYDecay', 'SteeringAxis', 'SteerLeftButton', 'SteerRightButton', 'BuggyRollAxisRaw', 'BuggyRollLeftButton', 'BuggyRollRightButton', 'BuggyPitchAxis', 'BuggyPitchUpButton', 'BuggyPitchDownButton', 'VerticalThrustersButton', 'BuggyPrimaryFireButton', 'BuggySecondaryFireButton', 'AutoBreakBuggyButton', 'HeadlightsBuggyButton', 'ToggleBuggyTurretButton', 'BuggyCycleFireGroupNext', 'BuggyCycleFireGroupPrevious']},
  drivingTargeting : {name:'drivingTargeting', controls:['SelectTarget_Buggy']},
  drivingTurret : {name:'drivingTurret', controls:['MouseTurretXMode', 'MouseTurretXDecay', 'MouseTurretYMode', 'MouseTurretYDecay', 'BuggyTurretYawAxisRaw', 'BuggyTurretYawLeftButton', 'BuggyTurretYawRightButton', 'BuggyTurretPitchAxisRaw', 'BuggyTurretPitchUpButton', 'BuggyTurretPitchDownButton', 'BuggyTurretMouseSensitivity', 'BuggyTurretMouseDeadzone', 'BuggyTurretMouseLinearity']},
  drivingThrottle : {name:'drivingThrottle', controls:['DriveSpeedAxis', 'BuggyThrottleRange', 'BuggyToggleReverseThrottleInput', 'IncreaseSpeedButtonMax', 'DecreaseSpeedButtonMax', 'IncreaseSpeedButtonPartial', 'DecreaseSpeedButtonPartial']},
  drivingMisc : {name:'drivingMisc', controls:['IncreaseEnginesPower_Buggy', 'IncreaseWeaponsPower_Buggy', 'IncreaseSystemsPower_Buggy', 'BuggyThrottleIncrement', 'ResetPowerDistribution_Buggy', 'ToggleCargoScoop_Buggy', 'EjectAllCargo_Buggy', 'RecallDismissShip']},
  drivingModeSwitches : {name:'drivingModeSwitches', controls:['UIFocus_Buggy', 'FocusLeftPanel_Buggy', 'FocusCommsPanel_Buggy', 'QuickCommsPanel_Buggy', 'FocusRadarPanel_Buggy', 'FocusRightPanel_Buggy', 'GalaxyMapOpen_Buggy', 'SystemMapOpen_Buggy', 'OpenCodexGoToDiscovery_Buggy', 'PlayerHUDModeToggle_Buggy', 'HeadLookToggle_Buggy']},
  multiCrew : {name:'multiCrew', controls:['MultiCrewToggleMode', 'MultiCrewPrimaryFire', 'MultiCrewSecondaryFire', 'MultiCrewPrimaryUtilityFire', 'MultiCrewSecondaryUtilityFire', 'MultiCrewThirdPersonMouseXMode', 'MultiCrewThirdPersonMouseXDecay', 'MultiCrewThirdPersonMouseYMode', 'MultiCrewThirdPersonMouseYDecay', 'MultiCrewThirdPersonYawAxisRaw', 'MultiCrewThirdPersonYawLeftButton', 'MultiCrewThirdPersonYawRightButton', 'MultiCrewThirdPersonPitchAxisRaw', 'MultiCrewThirdPersonPitchUpButton', 'MultiCrewThirdPersonPitchDownButton', 'MultiCrewThirdPersonMouseSensitivity', 'MultiCrewThirdPersonFovAxisRaw', 'MultiCrewThirdPersonFovOutButton', 'MultiCrewThirdPersonFovInButton', 'MultiCrewCockpitUICycleForward', 'MultiCrewCockpitUICycleBackward']},
  fighterOrders : {name:'fighterOrders', controls:['OrderRequestDock', 'OrderDefensiveBehaviour', 'OrderAggressiveBehaviour', 'OrderFocusTarget', 'OrderHoldFire', 'OrderHoldPosition', 'OrderFollow', 'OpenOrders']},
  cameraSuite : {name:'cameraSuite', controls:['PhotoCameraToggle', 'PhotoCameraToggle_Buggy', 'VanityCameraScrollLeft', 'VanityCameraScrollRight', 'ToggleFreeCam', 'VanityCameraOne', 'VanityCameraTwo', 'VanityCameraThree', 'VanityCameraFour', 'VanityCameraFive', 'VanityCameraSix', 'VanityCameraSeven', 'VanityCameraEight', 'VanityCameraNine']},
  freeCamera : {name:'freeCamera', controls:['FreeCamToggleHUD', 'FreeCamSpeedInc', 'FreeCamSpeedDec', 'MoveFreeCamY', 'ThrottleRangeFreeCam', 'ToggleReverseThrottleInputFreeCam', 'MoveFreeCamForward', 'MoveFreeCamBackwards', 'MoveFreeCamX', 'MoveFreeCamRight', 'MoveFreeCamLeft', 'MoveFreeCamZ', 'MoveFreeCamUpAxis', 'MoveFreeCamDownAxis', 'MoveFreeCamUp', 'MoveFreeCamDown', 'PitchCamera', 'FreeCamMouseSensitivity', 'FreeCamMouseYDecay', 'PitchCameraUp', 'PitchCameraDown', 'YawCamera', 'FreeCamMouseXDecay', 'YawCameraLeft', 'YawCameraLeft', 'RollCamera', 'RollCameraLeft', 'RollCameraRight', 'ToggleRotationLock', 'FixCameraRelativeToggle', 'FixCameraWorldToggle', 'QuitCamera', 'ToggleAdvanceMode', 'FreeCamZoomIn', 'FreeCamZoomOut', 'FStopDec', 'FStopInc']},
  storeCamera : {name:'storeCamera', controls:['StoreEnableRotation', 'StorePitchCamera', 'StoreYawCamera', 'StoreCamZoomIn', 'StoreCamZoomOut', 'StoreToggle']},
  holoMe : {name:'holoMe', controls:['CommanderCreator_Undo', 'CommanderCreator_Redo', 'CommanderCreator_Rotation_MouseToggle', 'CommanderCreator_Rotation']},
  playlist : {name:'playlist', controls:['GalnetAudio_Play_Pause', 'GalnetAudio_SkipForward', 'GalnetAudio_SkipBackward', 'GalnetAudio_ClearQueue']},
  FSS : {name:'FSS', controls:['ExplorationFSSCameraPitch', 'ExplorationFSSCameraPitchIncreaseButton', 'ExplorationFSSCameraPitchDecreaseButton', 'ExplorationFSSCameraYaw', 'ExplorationFSSCameraYawIncreaseButton', 'ExplorationFSSCameraYawDecreaseButton', 'ExplorationFSSZoomIn', 'ExplorationFSSZoomOut', 'ExplorationFSSMiniZoomIn', 'ExplorationFSSMiniZoomOut', 'ExplorationFSSRadioTuningX_Raw', 'ExplorationFSSRadioTuningX_Increase', 'ExplorationFSSRadioTuningX_Decrease',  'ExplorationFSSRadioTuningAbsoluteX', 'ExplorationFSSDiscoveryScan', 'ExplorationFSSQuit', 'FSSMouseXMode', 'FSSMouseXDecay', 'FSSMouseYMode', 'FSSMouseYDecay', 'FSSMouseSensitivity', 'FSSMouseDeadzone', 'FSSMouseLinearity', 'ExplorationFSSTarget', 'ExplorationFSSShowHelp']},
  DSS : {name:'DSS', controls:['ExplorationSAAChangeScannedAreaViewToggle', 'ExplorationSAAExitThirdPerson', 'SAAThirdPersonMouseXMode', 'SAAThirdPersonMouseXDecay', 'SAAThirdPersonMouseYMode', 'SAAThirdPersonMouseSensitivity', 'SAAThirdPersonYawAxisRaw', 'SAAThirdPersonYawLeftButton', 'SAAThirdPersonYawRightButton', 'SAAThirdPersonPitchAxisRaw', 'SAAThirdPersonPitchUpButton', 'SAAThirdPersonPitchDownButton', 'SAAThirdPersonFovAxisRaw','SAAThirdPersonFovOutButton', 'SAAThirdPersonFovInButton']}
}
