////////////////////////////////////////////////////////////////////////////////
// checkstyle: Checks Java source code for adherence to a set of rules.
// Copyright (C) 2001-2021 the original author or authors.
//
// This library is free software; you can redistribute it and/or
// modify it under the terms of the GNU Lesser General Public
// License as published by the Free Software Foundation; either
// version 2.1 of the License, or (at your option) any later version.
//
// This library is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
// Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public
// License along with this library; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
////////////////////////////////////////////////////////////////////////////////

package com.puppycrawl.tools.checkstyle.checks.javadoc;

import static com.google.common.truth.Truth.assertThat;
import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

import com.puppycrawl.tools.checkstyle.utils.JavadocUtil;

public class JavadocTagTest {

    /* Additional test for jacoco, since valueOf()
     * is generated by javac and jacoco reports that
     * valueOf() is uncovered.
     */
    @Test
    public void testJavadocTagTypeValueOf() {
        final JavadocUtil.JavadocTagType enumConst =
            JavadocUtil.JavadocTagType.valueOf("ALL");
        assertEquals(JavadocUtil.JavadocTagType.ALL, enumConst, "Invalid enum valueOf result");
    }

    /* Additional test for jacoco, since values()
     * is generated by javac and jacoco reports that
     * values() is uncovered.
     */
    @Test
    public void testJavadocTagTypeValues() {
        final JavadocUtil.JavadocTagType[] enumConstants =
            JavadocUtil.JavadocTagType.values();
        final JavadocUtil.JavadocTagType[] expected = {
            JavadocUtil.JavadocTagType.BLOCK,
            JavadocUtil.JavadocTagType.INLINE,
            JavadocUtil.JavadocTagType.ALL,
        };
        assertArrayEquals(expected, enumConstants, "Invalid enum constants");
    }

    @Test
    public void testToString() {
        final JavadocTag javadocTag = new JavadocTag(0, 1, "author", "firstArg");

        final String result = javadocTag.toString();

        assertEquals(
                "JavadocTag[tag='author' lineNo=0, columnNo=1, firstArg='firstArg']", result,
                "Invalid toString result");
    }

    @Test
    public void testJavadocTagReferenceImports() {
        assertThat(new JavadocTag(0, 0, "see", null).canReferenceImports()).isTrue();
        assertThat(new JavadocTag(0, 0, "link", null).canReferenceImports()).isTrue();
        assertThat(new JavadocTag(0, 0, "value", null).canReferenceImports()).isTrue();
        assertThat(new JavadocTag(0, 0, "linkplain", null).canReferenceImports()).isTrue();
        assertThat(new JavadocTag(0, 0, "throws", null).canReferenceImports()).isTrue();
        assertThat(new JavadocTag(0, 0, "exception", null).canReferenceImports()).isTrue();
    }

    @Test
    public void testJavadocTagReferenceImportsInvalid() {
        assertThat(new JavadocTag(0, 0, "author", null).canReferenceImports())
                .isFalse();
    }

}
