window.globalProvideData('slide', '{"title":"Patah tulang dibedakan atas 2 hal yaitu patah tulang bahu dan patah tulang panggul","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":29,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide29","width":720,"height":405,"resume":true,"background":{"type":"swf","imagedata":{"assetId":56,"url":"","type":"normal","width":0,"height":0,"mobiledx":0,"mobiledy":0}},"id":"5Weu4Wkl2h5","actionGroups":{"ReviewInt_5thmMBgUCnw":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5thmMBgUCnw.5qeuEVzkFWg"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5thmMBgUCnw.6WkDbp5UyCo"},"enabled":{"type":"boolean","value":false}}]},"ReviewIntCorrectIncorrect_5thmMBgUCnw":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5thmMBgUCnw.5qeuEVzkFWg"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5thmMBgUCnw.6WkDbp5UyCo.$OnStage","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5thmMBgUCnw.6WkDbp5UyCo"}}]},{"kind":"adjustvar","variable":"5thmMBgUCnw.6WkDbp5UyCo._hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"5thmMBgUCnw.6WkDbp5UyCo._down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"5thmMBgUCnw.6WkDbp5UyCo._disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"5thmMBgUCnw.6WkDbp5UyCo.ActGrpSetReviewState"},{"kind":"set_enabled","objRef":{"type":"string","value":"5thmMBgUCnw.6WkDbp5UyCo"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_5thmMBgUCnw":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_5thmMBgUCnw"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"DisableChoices_5thmMBgUCnw":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"5thmMBgUCnw.5qeuEVzkFWg.ActGrpSetDisabledState"},{"kind":"exe_actiongroup","id":"5thmMBgUCnw.6WkDbp5UyCo.ActGrpSetDisabledState"}]},"5thmMBgUCnw_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6c5PmTCsFSb.$Status","typea":"property","valueb":"correct","typeb":"string"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5thmMBgUCnw"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6c5PmTCsFSb.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6c5PmTCsFSb.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5thmMBgUCnw"}]}]}]}]},"NavigationRestrictionNextSlide_5Weu4Wkl2h5":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.5fJ9AxGRlCD"}}]},"NavigationRestrictionPreviousSlide_5Weu4Wkl2h5":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbnsnfns00000000001"}]}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_6MbEGKyWJ3H","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6MbEGKyWJ3H","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"exe_actiongroup","id":"5thmMBgUCnw_CheckAnswered"}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5thmMBgUCnw","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.5fJ9AxGRlCD"}}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_5thmMBgUCnw","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.5fJ9AxGRlCD"}}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_5Weu4Wkl2h5"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_5Weu4Wkl2h5"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5thmMBgUCnw"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5thmMBgUCnw.6WkDbp5UyCo"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5thmMBgUCnw.5qeuEVzkFWg"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6opxWP80isN"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5uMHHqSAqYj"}}]}]},"objects":[{"kind":"scrollarea","contentwidth":672,"contentheight":102,"objects":[{"kind":"shufflegroup","objects":[{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"60R6ZQZ9Fij_-225689717","id":"01","linkId":"txt__default_6WkDbp5UyCo","type":"acctext","xPos":10,"yPos":5,"xAccOffset":43,"yAccOffset":12,"width":585,"height":27,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"False","style":{"fontFamily":"\\"Times New Roman Charset70F17049\\",\\"Times New Roman\\"","fontSize":18,"ascent":21.387,"descent":5.191,"leading":1.02,"underlinePosition":-2.613,"underlineThickness":1.172,"xHeight":10.734}}],"style":{"flowDirection":"leftToRight","tagType":"P"},"runs":[{"idx":0,"len":5,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":94,"bottom":41,"pngfb":false,"pr":{"l":"Lib","i":211}}}],"shapemaskId":"","xPos":24,"yPos":51,"tabIndex":3,"tabEnabled":true,"radioGroup":"True/False","xOffset":0,"yOffset":0,"rotateXPos":324,"rotateYPos":25.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":51,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":140}},"html5data":{"xPos":0,"yPos":0,"width":648,"height":51,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":51,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":140}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":52,"strokewidth":3}}},{"kind":"state","name":"_default_Review","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-9,"top":-1,"right":648,"bottom":51,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":146}},"html5data":{"xPos":-9,"yPos":-1,"width":657,"height":52,"strokewidth":3}}},{"kind":"state","name":"_default_Disabled_Review","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-9,"top":-1,"right":648,"bottom":51,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":146}},"html5data":{"xPos":-9,"yPos":-1,"width":657,"height":52,"strokewidth":3}}},{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":51,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":140}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":52,"strokewidth":3}}},{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":51,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":141}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":52,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":51,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":141}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":52,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Review","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-9,"top":-1,"right":648,"bottom":51,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":147}},"html5data":{"xPos":-9,"yPos":-1,"width":657,"height":52,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Disabled_Review","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-9,"top":-1,"right":648,"bottom":51,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":147}},"html5data":{"xPos":-9,"yPos":-1,"width":657,"height":52,"strokewidth":3}}},{"kind":"state","name":"_default_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":51,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":141}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":52,"strokewidth":3}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":51,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":142}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":52,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":51,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":142}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":52,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":51,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":142}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":52,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":51,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":143}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":52,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":51,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":143}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":52,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":51,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":143}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":52,"strokewidth":3}}}],"width":648,"height":51,"resume":true,"useHandCursor":true,"id":"6WkDbp5UyCo","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_review","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.5qeuEVzkFWg.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.5qeuEVzkFWg._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.5qeuEVzkFWg"}}]}]},"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetReviewState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_review","operator":"set","value":{"type":"boolean","value":true}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_review","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6UE3mzDovLE_-399513464","id":"01","linkId":"txt__default_5qeuEVzkFWg","type":"acctext","xPos":10,"yPos":5,"xAccOffset":43,"yAccOffset":12,"width":585,"height":27,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"True","style":{"fontFamily":"\\"Times New Roman Charset70F17049\\",\\"Times New Roman\\"","fontSize":18,"ascent":21.387,"descent":5.191,"leading":1.02,"underlinePosition":-2.613,"underlineThickness":1.172,"xHeight":10.734}}],"style":{"flowDirection":"leftToRight","tagType":"P"},"runs":[{"idx":0,"len":4,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":88,"bottom":41,"pngfb":false,"pr":{"l":"Lib","i":212}}}],"shapemaskId":"","xPos":24,"yPos":0,"tabIndex":2,"tabEnabled":true,"radioGroup":"True/False","xOffset":0,"yOffset":0,"rotateXPos":324,"rotateYPos":25.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":51,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":140}},"html5data":{"xPos":0,"yPos":0,"width":648,"height":51,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":51,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":140}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":52,"strokewidth":3}}},{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":51,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":140}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":52,"strokewidth":3}}},{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":51,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":141}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":52,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":51,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":141}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":52,"strokewidth":3}}},{"kind":"state","name":"_default_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":51,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":141}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":52,"strokewidth":3}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":51,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":142}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":52,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":51,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":142}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":52,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":51,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":142}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":52,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":51,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":143}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":52,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":51,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":143}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":52,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":51,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":143}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":52,"strokewidth":3}}}],"width":648,"height":51,"resume":true,"useHandCursor":true,"id":"5qeuEVzkFWg","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6WkDbp5UyCo.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.6WkDbp5UyCo._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.6WkDbp5UyCo"}}]}]},"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]}],"shuffle":false,"depth":1,"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":-1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":0,"rotateYPos":0,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"scrolling":true,"shuffleLock":false,"width":0,"height":0,"resume":false,"useHandCursor":true,"id":""}],"shapemaskId":"","xPos":48,"yPos":138,"tabIndex":1,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":324,"rotateYPos":119,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"html5data":{"url":"","xPos":0,"yPos":0,"width":648,"height":237,"strokewidth":0}},"width":672,"height":237,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":0,"top":0,"right":672,"bottom":238,"altText":"True/False","pngfb":false,"pr":{"l":"Lib","i":222}}},"id":"5thmMBgUCnw"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6opxWP80isN_1537560597","id":"01","linkId":"txt__default_6opxWP80isN","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":548,"height":56,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Patah tulang dibedakan atas 2 hal yaitu patah tulang bahu dan patah tulang panggul","style":{"fontFamily":"\\"Times New Roman Charset70F17049\\",\\"Times New Roman\\"","ascent":21.981,"descent":5.336,"leading":1.048,"underlinePosition":-2.686,"underlineThickness":1.204,"xHeight":11.033}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":82,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":18.5,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":529,"bottom":63,"pngfb":false,"pr":{"l":"Lib","i":226}}}],"shapemaskId":"","xPos":80,"yPos":50,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":284,"rotateYPos":33,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":568,"bottom":66,"altText":"Patah tulang dibedakan atas 2 hal yaitu patah tulang bahu dan patah tulang panggul","pngfb":false,"pr":{"l":"Lib","i":225}},"html5data":{"xPos":0,"yPos":0,"width":568,"height":66,"strokewidth":0}},"width":568,"height":66,"resume":true,"useHandCursor":true,"id":"6opxWP80isN"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","shapemaskId":"","xPos":664,"yPos":354,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":20,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":41,"bottom":40,"altText":"Button 2","pngfb":false,"pr":{"l":"Lib","i":20}},"html5data":{"xPos":0,"yPos":0,"width":40,"height":40,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":41,"bottom":40,"altText":"Button 3","pngfb":false,"pr":{"l":"Lib","i":20}},"html5data":{"xPos":-1,"yPos":-1,"width":42,"height":41,"strokewidth":0}}},{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-3,"top":-3,"right":43,"bottom":42,"altText":"Button 3","pngfb":false,"pr":{"l":"Lib","i":21}},"html5data":{"xPos":-3,"yPos":-3,"width":46,"height":45,"strokewidth":3}}},{"kind":"state","name":"_default_Visited","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":41,"bottom":40,"altText":"Button 3","pngfb":false,"pr":{"l":"Lib","i":20}},"html5data":{"xPos":-1,"yPos":-1,"width":42,"height":41,"strokewidth":0}}},{"kind":"state","name":"_default_Visited_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":41,"bottom":40,"altText":"Button 3","pngfb":false,"pr":{"l":"Lib","i":20}},"html5data":{"xPos":-1,"yPos":-1,"width":42,"height":41,"strokewidth":0}}},{"kind":"state","name":"_default_Down_Visited","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-3,"top":-3,"right":43,"bottom":42,"altText":"Button 3","pngfb":false,"pr":{"l":"Lib","i":21}},"html5data":{"xPos":-3,"yPos":-3,"width":46,"height":45,"strokewidth":3}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":42,"bottom":41,"altText":"Button 3","pngfb":false,"pr":{"l":"Lib","i":22}},"html5data":{"xPos":-2,"yPos":-2,"width":44,"height":43,"strokewidth":1}}},{"kind":"state","name":"_default_Hover_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-2,"top":-2,"right":42,"bottom":41,"altText":"Button 3","pngfb":false,"pr":{"l":"Lib","i":22}},"html5data":{"xPos":-2,"yPos":-2,"width":44,"height":43,"strokewidth":1}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-3,"top":-3,"right":43,"bottom":42,"altText":"Button 3","pngfb":false,"pr":{"l":"Lib","i":21}},"html5data":{"xPos":-3,"yPos":-3,"width":46,"height":45,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Visited","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":42,"bottom":41,"altText":"Button 3","pngfb":false,"pr":{"l":"Lib","i":22}},"html5data":{"xPos":-2,"yPos":-2,"width":44,"height":43,"strokewidth":1}}},{"kind":"state","name":"_default_Hover_Visited_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":41,"bottom":40,"altText":"Button 3","pngfb":false,"pr":{"l":"Lib","i":20}},"html5data":{"xPos":-1,"yPos":-1,"width":42,"height":41,"strokewidth":0}}},{"kind":"state","name":"_default_Hover_Down_Visited","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-3,"top":-3,"right":43,"bottom":42,"altText":"Button 3","pngfb":false,"pr":{"l":"Lib","i":21}},"html5data":{"xPos":-3,"yPos":-3,"width":46,"height":45,"strokewidth":3}}}],"width":40,"height":40,"resume":true,"useHandCursor":true,"id":"5uMHHqSAqYj","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_visited","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_savevisited","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetVisitedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_savevisited","operator":"set","value":{"type":"var","value":"#_visited"}},{"kind":"adjustvar","variable":"_visited","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_visited","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_savevisited","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetVisitedState","scopeRef":{"type":"string","value":"_this"}},{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6Smc5L7DhmL.5fJ9AxGRlCD"}}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');