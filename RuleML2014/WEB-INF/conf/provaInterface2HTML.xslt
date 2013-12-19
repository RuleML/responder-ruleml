<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns="http://www.ruleml.org/0.91/xsd">
	<xsl:output method="xml" version="1.0" encoding="UTF-8"
		indent="yes" />
	<xsl:template match="/">
		<Atom>
			<xsl:apply-templates />
		</Atom>
	</xsl:template>

	<xsl:template match="oid">
		<Rel>
			<xsl:value-of select="./Ind" />
		</Rel>
		<xsl:apply-templates />
	</xsl:template>

	<xsl:template match="Expr">
		<Expr>
		<Fun><xsl:value-of select="./Fun" /></Fun>
			<xsl:apply-templates />
		</Expr>
	</xsl:template>

	<xsl:template match="Var">
		<xsl:if test="@mode='+'">
			<Ind>
				<xsl:attribute name="type">
          <xsl:value-of select="@type" />
      </xsl:attribute>
				<xsl:value-of select="." />
			</Ind>
		</xsl:if>
		<xsl:if test="@mode='-'">
			<Var><xsl:attribute name="type"><xsl:value-of select="@type" /></xsl:attribute><xsl:value-of select="." /></Var>
		</xsl:if>
	</xsl:template>
	<xsl:template match="text()"/>
</xsl:stylesheet>
