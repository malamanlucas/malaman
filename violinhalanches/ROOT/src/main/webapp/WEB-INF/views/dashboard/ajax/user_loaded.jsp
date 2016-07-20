
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.violinhalanches.com.br/taglibs/core" prefix="vl"%>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec"%>
<%@ taglib tagdir="/WEB-INF/tags" prefix="vl-tags"%>

<span class="text_username">${user.name} </span> <br />
<span class="text_user_phone">${user.phone}</span> 
<a class="icon_manager ${user.userType.icon} icon_status_user"></a>
<br /> 
<span class="text_user_quantity_pedido">${user.quantityPedido}</span> pedidos feitos <br />
<span class="text_user_quantity_payed">${user.quantityPayed}</span> pedidos pagos <br />
<span class="text_user_quantity_not_payed">${user.quantityCancelled}</span> pedidos não pagos <br />