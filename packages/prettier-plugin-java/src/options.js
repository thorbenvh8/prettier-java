"use strict";

module.exports = {
  entrypoint: {
    type: "choice",
    category: "Global",
    default: "compilationUnit",
    // sed -nr 's/.*\.RULE\(([^,]+),.*/\1/p' $(ls path/to/java-parser/rules/folder)
    choices: [
      { value: "arrayInitializer" },
      { value: "variableInitializerList" },
      { value: "block" },
      { value: "blockStatements" },
      { value: "blockStatement" },
      { value: "localVariableDeclarationStatement" },
      { value: "localVariableDeclaration" },
      { value: "localVariableType" },
      { value: "statement" },
      { value: "statementWithoutTrailingSubstatement" },
      { value: "emptyStatement" },
      { value: "labeledStatement" },
      { value: "expressionStatement" },
      { value: "statementExpression" },
      { value: "ifStatement" },
      { value: "assertStatement" },
      { value: "switchStatement" },
      { value: "switchBlock" },
      { value: "switchCase" },
      { value: "switchLabel" },
      { value: "enumConstantName" },
      { value: "whileStatement" },
      { value: "doStatement" },
      { value: "forStatement" },
      { value: "basicForStatement" },
      { value: "forInit" },
      { value: "forUpdate" },
      { value: "statementExpressionList" },
      { value: "enhancedForStatement" },
      { value: "breakStatement" },
      { value: "continueStatement" },
      { value: "returnStatement" },
      { value: "throwStatement" },
      { value: "synchronizedStatement" },
      { value: "tryStatement" },
      { value: "catches" },
      { value: "catchClause" },
      { value: "catchFormalParameter" },
      { value: "catchType" },
      { value: "finally" },
      { value: "tryWithResourcesStatement" },
      { value: "resourceSpecification" },
      { value: "resourceList" },
      { value: "resource" },
      { value: "resourceInit" },
      { value: "variableAccess" },
      { value: "isBasicForStatement" },
      { value: "isLocalVariableDeclaration" },
      { value: "classDeclaration" },
      { value: "normalClassDeclaration" },
      { value: "classModifier" },
      { value: "typeParameters" },
      { value: "typeParameterList" },
      { value: "superclass" },
      { value: "superinterfaces" },
      { value: "interfaceTypeList" },
      { value: "classBody" },
      { value: "classBodyDeclaration" },
      { value: "classMemberDeclaration" },
      { value: "fieldDeclaration" },
      { value: "fieldModifier" },
      { value: "variableDeclaratorList" },
      { value: "variableDeclarator" },
      { value: "variableDeclaratorId" },
      { value: "variableInitializer" },
      { value: "unannType" },
      { value: "unannPrimitiveType" },
      { value: "unannReferenceType" },
      { value: "unannClassOrInterfaceType" },
      { value: "unannClassType" },
      { value: "unannInterfaceType" },
      { value: "unannTypeVariable" },
      { value: "methodDeclaration" },
      { value: "methodModifier" },
      { value: "methodHeader" },
      { value: "result" },
      { value: "methodDeclarator" },
      { value: "receiverParameter" },
      { value: "formalParameterList" },
      { value: "formalParameter" },
      { value: "variableParaRegularParameter" },
      { value: "variableArityParameter" },
      { value: "variableModifier" },
      { value: "throws" },
      { value: "exceptionTypeList" },
      { value: "exceptionType" },
      { value: "methodBody" },
      { value: "instanceInitializer" },
      { value: "staticInitializer" },
      { value: "constructorDeclaration" },
      { value: "constructorModifier" },
      { value: "constructorDeclarator" },
      { value: "simpleTypeName" },
      { value: "constructorBody" },
      { value: "explicitConstructorInvocation" },
      { value: "unqualifiedExplicitConstructorInvocation" },
      { value: "qualifiedExplicitConstructorInvocation" },
      { value: "enumDeclaration" },
      { value: "enumBody" },
      { value: "enumConstantList" },
      { value: "enumConstant" },
      { value: "enumConstantModifier" },
      { value: "enumBodyDeclarations" },
      { value: "isClassDeclaration" },
      { value: "identifyClassBodyDeclarationType" },
      { value: "isDims" },
      { value: "constantExpression" },
      { value: "expression" },
      { value: "lambdaExpression" },
      { value: "lambdaParameters" },
      { value: "lambdaParametersWithBraces" },
      { value: "lambdaParameterList" },
      { value: "inferredLambdaParameterList" },
      { value: "explicitLambdaParameterList" },
      { value: "lambdaParameter" },
      { value: "regularLambdaParameter" },
      { value: "lambdaParameterType" },
      { value: "lambdaBody" },
      { value: "ternaryExpression" },
      { value: "binaryExpression" },
      { value: "unaryExpression" },
      { value: "unaryExpressionNotPlusMinus" },
      { value: "primary" },
      { value: "primaryPrefix" },
      { value: "primarySuffix" },
      { value: "fqnOrRefType" },
      { value: "fqnOrRefTypePartRest" },
      { value: "fqnOrRefTypePartCommon" },
      { value: "fqnOrRefTypePartFirst" },
      { value: "parenthesisExpression" },
      { value: "castExpression" },
      { value: "primitiveCastExpression" },
      { value: "referenceTypeCastExpression" },
      { value: "newExpression" },
      { value: "unqualifiedClassInstanceCreationExpression" },
      { value: "classOrInterfaceTypeToInstantiate" },
      { value: "typeArgumentsOrDiamond" },
      { value: "diamond" },
      { value: "methodInvocationSuffix" },
      { value: "argumentList" },
      { value: "arrayCreationExpression" },
      { value: "arrayCreationDefaultInitSuffix" },
      { value: "arrayCreationExplicitInitSuffix" },
      { value: "dimExprs" },
      { value: "dimExpr" },
      { value: "classLiteralSuffix" },
      { value: "arrayAccessSuffix" },
      { value: "methodReferenceSuffix" },
      { value: "identifyNewExpressionType" },
      { value: "isLambdaExpression" },
      { value: "isCastExpression" },
      { value: "isPrimitiveCastExpression" },
      { value: "isReferenceTypeCastExpression" },
      { value: "isRefTypeInMethodRef" },
      { value: "interfaceDeclaration" },
      { value: "normalInterfaceDeclaration" },
      { value: "interfaceModifier" },
      { value: "extendsInterfaces" },
      { value: "interfaceBody" },
      { value: "interfaceMemberDeclaration" },
      { value: "constantDeclaration" },
      { value: "constantModifier" },
      { value: "interfaceMethodDeclaration" },
      { value: "interfaceMethodModifier" },
      { value: "annotationTypeDeclaration" },
      { value: "annotationTypeBody" },
      { value: "annotationTypeMemberDeclaration" },
      { value: "annotationTypeElementDeclaration" },
      { value: "annotationTypeElementModifier" },
      { value: "defaultValue" },
      { value: "annotation" },
      { value: "elementValuePairList" },
      { value: "elementValuePair" },
      { value: "elementValue" },
      { value: "elementValueArrayInitializer" },
      { value: "elementValueList" },
      { value: "identifyInterfaceBodyDeclarationType" },
      { value: "identifyAnnotationBodyDeclarationType" },
      { value: "isSimpleElementValueAnnotation" },
      { value: "literal" },
      { value: "integerLiteral" },
      { value: "floatingPointLiteral" },
      { value: "booleanLiteral" },
      { value: "moduleName" },
      { value: "packageName" },
      { value: "typeName" },
      { value: "expressionName" },
      { value: "methodName" },
      { value: "packageOrTypeName" },
      { value: "ambiguousName" },
      { value: "compilationUnit" },
      { value: "ordinaryCompilationUnit" },
      { value: "modularCompilationUnit" },
      { value: "packageDeclaration" },
      { value: "packageModifier" },
      { value: "importDeclaration" },
      { value: "typeDeclaration" },
      { value: "moduleDeclaration" },
      { value: "moduleDirective" },
      { value: "requiresModuleDirective" },
      { value: "exportsModuleDirective" },
      { value: "opensModuleDirective" },
      { value: "usesModuleDirective" },
      { value: "providesModuleDirective" },
      { value: "requiresModifier" },
      { value: "isModuleCompilationUnit" },
      { value: "primitiveType" },
      { value: "numericType" },
      { value: "integralType" },
      { value: "floatingPointType" },
      { value: "referenceType" },
      { value: "classOrInterfaceType" },
      { value: "classType" },
      { value: "interfaceType" },
      { value: "typeVariable" },
      { value: "dims" },
      { value: "typeParameter" },
      { value: "typeParameterModifier" },
      { value: "typeBound" },
      { value: "additionalBound" },
      { value: "typeArguments" },
      { value: "typeArgumentList" },
      { value: "typeArgument" },
      { value: "wildcard" },
      { value: "wildcardBounds" }
    ],
    description:
      "Prettify from the entrypoint, allowing to use prettier on snippet."
  }
};
